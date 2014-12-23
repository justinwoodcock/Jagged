'use strict';

var uiBase = angular.module('uiBase', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'restangular'
]);

uiBase.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('home', {
        url: '/',
        views: {
            header: {
                templateUrl: '/components/header/header.index.html'
            },
            content: {
                templateUrl: '/components/info/info.index.html',
                controller: 'InfoController'
            },
            footer: {
                templateUrl: '/components/footer/footer.index.html'
            }
        }
    }).state('template', {
        url: '/template',
        views: {
            header: {
                templateUrl: '/components/header/header.index.html'
            },
            content: {
                templateUrl: '/components/_template/template.index.html',
                controller: 'TemplateController'
            },
            footer: {
                templateUrl: '/components/footer/footer.index.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
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
