import fetchIntercept from 'fetch-intercept';

const address = 'http://127.0.0.1:8077';

const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        if (config){config.credentials = 'include'}
        else {config = { credentials: 'include' }} //为了跨域
        return [address + url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        return Promise.reject(error);
    }
});