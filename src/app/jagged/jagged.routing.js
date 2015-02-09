'use strict';

angular.module('jagged').config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('home', {
        url: '/',
        views: {
            header: {
                templateUrl: 'components/header/header.index.html'
            },
            content: {
                templateUrl: 'components/home/home.index.html',
                controller: 'HomeController'
            },
            footer: {
                templateUrl: 'components/footer/footer.index.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
});
