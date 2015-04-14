'use strict';

angular.module('jagged').directive('boilerplate', function() {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'components/_boilerplate/boilerplate.template.html',
        link: function($scope, $element, $attrs) {}
    }
});
