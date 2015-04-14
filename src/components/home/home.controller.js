'use strict';

angular.module('jagged').controller('HomeController', ['$scope',
    function($scope) {
        $scope.version = '1.0.0';
        $scope.todos = [
            {
                title: 'Absolute states',
                description: 'change ui-router config so that it uses child/parent views.',
                githubUrl: 'https://github.com/justinwoodcock',
                completed: false
            }
        ];
        $scope.alerts.push({
            type: 'info',
            message: 'There are ' + $scope.todos.length + ' todos that need to be done.'
        });
    }
]);
