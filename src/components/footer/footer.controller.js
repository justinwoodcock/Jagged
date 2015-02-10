'use strict';

angular.module('jagged').controller('FooterController', ['$scope',
    function($scope) {
        $scope.date = new Date();
    }
]);
