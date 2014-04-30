'use strict';

uiBaseboxApp.controller('InfoController', ['$scope',
    function($scope) {
        $scope.version = '0.0.1';
        $scope.todos = [{
            item: 'add unit test',
            description: 'just one basic test for an example, we\'ll check the version number.',
            githubUrl: '#',
            completed: true
        }, {
            item: 'add fontello icon font',
            description: 'just a few basic font icons along with the config for future additions.',
            githubUrl: '#',
            completed: false
        }, {
            item: 'add list of thirdparty libraries used',
            description: 'simple list added to the main view that gives the title and link to all external assets.',
            completed: false,
            githubUrl: '#'
        }]
    }
]);