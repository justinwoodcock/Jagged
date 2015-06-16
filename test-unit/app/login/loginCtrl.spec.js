import angular from 'angular';
import loginModule from 'app/login/controllers/loginCtrl';
import 'angular-mocks';

describe('Login Controller', function () {
	var ctrl, $rootScope, $state, $scope;

	function goTo(url) {
		$state.go(url);
		$rootScope.$digest();
	}

	// Load the module containing the app, only 'ng' is loaded by default.
	beforeEach(angular.mock.module(loginModule.name));

	beforeEach(inject(function (_$rootScope_, _$state_) {
		$rootScope = _$rootScope_;
		$state = _$state_;

		$scope = $rootScope.$new();

	}));

	describe('initial state', function() {
		beforeEach(inject(function($controller) {
			ctrl = $controller('LoginCtrl', {
				$rootScope: $rootScope,
				$scope: $scope,
				$state: $state
			});
		}));

		it('should have an empty creds object', function () {
			expect($scope.creds).toBeDefined();
			expect($scope.creds.email).toBeUndefined();
			expect($scope.creds.password).toBeUndefined();
		});

	});

});
