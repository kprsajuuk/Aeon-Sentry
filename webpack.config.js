const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
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
            use: ['file-loader']
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
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8066,
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
}