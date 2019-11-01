const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['\*', '.js', '.jsx'],
        alias: {
            '@': require('path').resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    publicPath: '/dist/'
                }
            }]
        },{
            test: /\.scss$/,
            exclude: [
                path.resolve(__dirname, 'index.scss'),
            ],
            use: [{
                loader: "style-loader" // JS字符串转style
            }, {
                loader: "css-loader" // CSS转CommonJS
            }, {
                loader: "sass-loader" // Scss转CSS
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './public/favicon.ico' // favicon.ico路径
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8066,
        publicPath: 'http://localhost:8077/dist',
        proxy: {
            '/': {
                target: 'http://localhost:8077',
                bypass: function(req, res, proxyOptions) {
                    if (req.headers.accept.indexOf("html") !== -1) {
                        console.log("Skipping proxy for browser request.");
                        return "/index.html";
                    }
                }
            }
        }
    }
};