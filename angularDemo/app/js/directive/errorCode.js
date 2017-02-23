/**
 * Created by Administrator on 2016/9/19.
 */
(function(app){

    app.directive('errorCode', ["$timeout", function($timeout) {
        return {
            restrict: 'A',
            link: function(scope,element,attrs) {
                element.bind('click',function(){
                        console.log(attrs.id);
                        $('.log-red').removeClass('log-red');
                        $('.log-red-doing').removeClass('log-red-doing');
                        //element.addClass('log-red');
                        //scope.coding={};
                        //scope.coding.id=attrs.id;
                        scope.taskname1 = element.context.innerHTML;

                        scope.$emit('to-task3', scope.taskname1);

                    }
                );
            }
        };
    }])
})(angular.module(APP_NAME));