/**
 * Created by liekkas on 15/9/18.
 */
(function (app) {
    'use strict';

    app.filter('trustAsResourceUrl', trustAsResourceUrl);

    /**
     * @ngInject
     */
    function trustAsResourceUrl($sce) {

        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }

})(angular.module(APP_NAME));
