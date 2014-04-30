'use strict';

uiBase.controller('InfoController', ['$scope',
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
            githubUrl: 'https://elephanthub.net/ui/ui-base/issues/1',
            completed: false
        }, {
            item: 'add list of thirdparty libraries used',
            description: 'simple list added to the main view that gives the title and link to all external assets.',
            completed: true,
            githubUrl: '#'
        }]
    }
]);