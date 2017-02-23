(function (app) {
    'use strict';

    app.service('Facade',['$http','$location','$rootScope',function($http,$location,$rootScope){
        var service = {};
        $rootScope.protocol = $location.protocol();
        $rootScope.ip = $location.host();
        $rootScope.port = $location.port();
        $rootScope.ip = "120.24.37.202";
        $rootScope.port = "80";

        service.getEditorOptions = function(){
            return $http.get($rootScope.protocol+'://'+$rootScope.ip+':'+$rootScope.port+
                '/UltraCollectServer/getOnLineRegisterDevice');
        }
        return service;
    }]);
})(angular.module(APP_NAME));