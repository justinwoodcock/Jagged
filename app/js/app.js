'use strict';

var uiBaseboxApp = angular.module('uiBaseboxApp', [
    'ui.router',
    'ui.bootstrap'
]);

uiBaseboxApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('main', {
        url: '/',
        views: {
            content: {
                templateUrl: '/views/main/partial.main.html',
                controller: 'MainController'
            }
        }
    }).state('info', {
        url: '/info',
        views: {
            content: {
                templateUrl: '/views/info/partial.info.html',
                controller: 'InfoController'
            }
        }
    });

    $urlRouterProvider.otherwise('/info');
});