import angular from 'angular';

import sidenavModule from '../sidenavModule';

sidenavModule.controller('SidenavCtrl', function SidenavCtrl($scope, $state, $mdSidenav, $mdUtil, $log) {
    $scope.navItems = [{
        title: 'User profile',
        sub: 'Profile things are done here.',
        link: 'user'
    }, {
        title: 'Login',
        sub: 'Go here to login.',
        link: 'login'
    }];
});
