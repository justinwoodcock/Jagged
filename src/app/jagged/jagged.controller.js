'use strict';

angular.module('jagged').controller('JaggedController', ['$scope', '$rootScope', 'JaggedFactory',
    function($scope, $rootScope, JaggedFactory) {
        // This function fires on every stateChangeStart event and sets the $scope.state variable to the current state.
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $scope.state = toState;
            $scope.state.params = toParams;
        });
        // set the sessionData variable for localStorage data to be used throughout the app.
        $scope.sessionData = JaggedFactory.getStorage();
    }
]);
