uiBase.factory('UiBaseFactory', ['Restangular',
    function(Restangular) {
        return {
            getThings: function(param) {
                return Restangular.getList(param);
            }
        }
    }

]);