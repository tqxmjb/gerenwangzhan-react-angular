/**
 * Created by liekkas on 15/9/27.
 */
(function (app) {
    'use strict';

    /**
     * @ngInject
     */
    function pageTitle($rootScope,AppSettings) {

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            $rootScope.pageTitle = '';
            // console.log("pageTitle--->");
            if ( toState.title ) {
                $rootScope.pageTitle += toState.title;
                $rootScope.pageTitle += ' \u2014 ';
            }

            $rootScope.pageTitle += AppSettings.appTitle;
        });
    }

    app.run(pageTitle);

})(angular.module(APP_NAME));