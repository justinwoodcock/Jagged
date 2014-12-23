uiBase.factory('AuthFactory', ['Restangular', 'UiBaseFactory',
    function(Restangular, UiBaseFactory) {
        var hasAuth = false;
        var token = '';
        return {
            login: function(creds) {
                Restangular.one('auth', 'login').get(creds).then(function(data) {
                    hasAuth = true;
                }, function(data) {
                    console.log(data);
                });
            },
            getToken: function() {
                Restangular.one('user', 'jwt').get().then(function(data) {
                    hasAuth = true;
                    token = data.token;
                    Restangular.setDefaultHeaders({
                        access_token: data.token
                    });
                    return token;
                }, function(data) {
                    console.log(data);
                });
            },
            logout: function() {
                Restangular.one('auth', 'logout').post().then(function(data) {
                    hasAuth = false;
                    var storage = UiBaseFactory.getStorage();
                    storage.session.hasAuth = false;
                    UiBaseFactory.setStorage(storage);
                }, function(data) {
                    console.log(data);
                });
            },
            check: function() {
                if (!hasAuth) {
                    var storage = UiBaseFactory.getStorage();
                    if(!_.isEmpty(storage.session)) {
                        hasAuth = storage.session.hasAuth;
                    }
                }
                return hasAuth;
            },
            token: function() {
                return token;
            }
        }
    }

]);