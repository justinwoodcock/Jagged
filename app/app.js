'use strict';

var uiBase = angular.module('uiBase', [
    'ui.router',
    'ui.bootstrap',
    'restangular'
]);

uiBase.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('info', {
        url: '/info',
        views: {
            header: {
                templateUrl: '/components/header/index.html'
            },
            content: {
                templateUrl: '/components/info/index.html',
                controller: 'InfoController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    }).state('template', {
        url: '/template',
        views: {
            header: {
                templateUrl: '/components/header/index.html'
            },
            content: {
                templateUrl: '/components/_template/index.html',
                controller: 'TemplateController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/info');
});

uiBase.config(['RestangularProvider',
    function(RestangularProvider) {
        var apiUrl = 'https://api.ui-base.dev';
        RestangularProvider.setBaseUrl(apiUrl);
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            var extractedData = data.data;
            return extractedData;
        });
    }
]);
