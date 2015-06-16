import angular from 'angular';
import appModule from 'app/app';
import sidenavModule from 'common/sidenav/sidenav';
import sidenavTpl from 'common/sidenav/sidenav.tpl';
import headerModule from 'common/header/header';
import headerTpl from 'common/header/header.tpl';
import userTpl from 'app/user/user.tpl';

let userModule = angular.module('user', [appModule.name, sidenavModule.name, sidenavTpl.name, headerModule.name, headerTpl.name, userTpl.name]);

userModule.config(($stateProvider) => {

    $stateProvider
        .state('user', {
            url: '/user',
            views: {
                content: {
                    templateUrl: userTpl.name,
                    controller: 'UserCtrl'
                },
                sidenav: {
                    templateUrl: sidenavTpl.name,
                    controller: 'SidenavCtrl'
                },
                header: {
                    templateUrl: headerTpl.name,
                    controller: 'HeaderCtrl'
                }
            }
        });
});

export default userModule;
