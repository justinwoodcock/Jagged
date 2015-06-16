import angular from 'angular';

import appModule from './appModule';

appModule.controller('AppCtrl', function AppCtrl($scope, $log, $state, $mdSidenav, RandomUserService) {
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $scope.state = toState;
        $scope.user = RandomUserService.getUser();
        if (typeof $scope.user === 'undefined' || !$scope.user) {
        	createUser();
	    }  
    });
    $scope.toggleNav = function(navId) {
        $mdSidenav(navId)
            .toggle()
            .then(function() {
                $log.debug("toggle " + navId + " is done");
            });
    };
    $scope.logout = function() {
		RandomUserService.removeUser();
		$scope.user = undefined;
		$state.go('login');
	};
	function createUser() {
		RandomUserService.getRandomUser(1).then(function(data) {
            $scope.user = data[0].user;
            RandomUserService.storeUser($scope.user);
        });
	};
});

export default appModule;
