'use strict';

describe('controllers', function() {
    var scope;

    beforeEach(module('jagged'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should have a version variable.', inject(function($controller) {
        expect(scope.version).toBeUndefined();

        $controller('HomeController', {
            $scope: scope
        });

        expect(angular.isDefined(scope.version)).toBeTruthy();

    }));
});
