import angular from 'angular';

import serviceModule from '../serviceModule';

serviceModule.service('RandomUserService', function($http) {
	var url = 'http://api.randomuser.me/';
    return {
        getRandomUser: function(count) {
        	var userCount = typeof count == 'Number' ? count : 1;
        	var promise = $http.get(url + '?results=' + userCount)
        		.then(function(response) {
	        		return response.data.results;
	        	});
        	return promise;
        },
        storeUser: function(user) {
        	localStorage.setItem('user', JSON.stringify(user));
        },
        getUser: function() {
        	return JSON.parse(localStorage.getItem('user'));
        },
        removeUser: function() {
            localStorage.removeItem('user');
        }

    };
});

export default serviceModule;
