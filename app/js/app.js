'use strict';

var uiBaseboxApp = angular.module('uiBaseboxApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
]);

uiBaseboxApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('create', {
        url: '/',
        views: {
            content: {
                templateUrl: 'views/app/create-form.html',
                controller: 'CreateFormController'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
});