import angular from 'angular';
import appModule from 'app/app';
import loginTpl from 'app/login/login.tpl';
import sidenavTpl from 'common/sidenav/sidenav.tpl';
import headerTpl from 'common/header/header.tpl';

let loginModule = angular.module('login', [appModule.name, loginTpl.name, sidenavTpl.name, headerTpl.name]);

loginModule.config(($stateProvider) => {

    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                content: {
                    templateUrl: loginTpl.name,
                    controller: 'LoginCtrl'
                },
                header: {
                    templateUrl: headerTpl.name
                }
            }
        });
});

export default loginModule;
