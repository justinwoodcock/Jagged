import angular from 'angular';

import loginModule from '../loginModule';

loginModule.controller('LoginCtrl', function loginCtrl($scope, $state, $mdToast, $animate) {
    
    $scope.creds = {};
    $scope.login = function() {
        if ($scope.user.email === $scope.creds.email && $scope.user.password === $scope.creds.password) {
            $state.go('user');
        } else {
            $mdToast.show(
                $mdToast.simple()
                .content('Login failed, check your credentials and try again.')
                .position(getToastPosition())
                .hideDelay(3000)
            );
        }
    };

    $scope.fillCreds = function() {
        $scope.creds = {
            email: $scope.user.email,
            password: $scope.user.password
        };
    };

    var toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    function getToastPosition() {
        return Object.keys(toastPosition)
            .filter(function(pos) {
                return toastPosition[pos];
            })
            .join(' ');
    };

});

export default loginModule;
