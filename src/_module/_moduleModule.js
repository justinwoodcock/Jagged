import angular from 'angular';
import appModule from 'app/app';
import sidenavModule from 'common/sidenav/sidenav';
import sidenavTpl from 'common/sidenav/sidenav.tpl';
import headerModule from 'common/header/header';
import headerTpl from 'common/header/header.tpl';
import _moduleTpl from 'app/_module/_module.tpl';

let _moduleModule = angular.module('_module', [appModule.name, sidenavModule.name, sidenavTpl.name, headerModule.name, headerTpl.name, _moduleTpl.name]);

_moduleModule.config(($stateProvider) => {

    $stateProvider
        .state('_module', {
            url: '/_module',
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

export default _moduleModule;
