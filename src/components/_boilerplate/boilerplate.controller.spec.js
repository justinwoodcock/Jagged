'use strict';

describe('controllers', function() {
    var scope;

    beforeEach(module('jagged'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('shouldn\'t have a "scope.template" variable.', inject(function($controller) {
        expect(scope.template).toBeUndefined();

        $controller('TemplateController', {
            $scope: scope
        });

        expect(angular.isDefined(scope.template)).toBeFalsy();

    }));
});
