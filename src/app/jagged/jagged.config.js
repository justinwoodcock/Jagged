'use strict';

angular.module('jagged').config(['RestangularProvider',
    function(RestangularProvider) {
        var apiUrl = 'https://api.jagged.dev';
        RestangularProvider.setBaseUrl(apiUrl);
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            var extractedData = data.data;
            return extractedData;
        });
    }
]);
