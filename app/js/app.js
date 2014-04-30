'use strict';

var uiBaseboxApp = angular.module('uiBaseboxApp', [
    'ui.router',
    'ui.bootstrap'
]);

uiBaseboxApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('create', {
        url: '/',
        views: {
            content: {
                templateUrl: '',
                controller: ''
            }
        }
    });

    $urlRouterProvider.otherwise('/');
});