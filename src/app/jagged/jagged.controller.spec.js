'use strict';

describe('controllers', function() {
    var scope;

    beforeEach(module('jagged'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should have a sessionData variable for localStorage', inject(function($controller) {
        expect(scope.sessionData).toBeUndefined();

        $controller('JaggedController', {
            $scope: scope
        });

        expect(angular.isObject(scope.sessionData)).toBeTruthy();

    }));
});
