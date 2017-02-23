/**
 * Created by liekkas.zeng on 2015/1/7.
 */
angular.module('ng-echarts',[])
    .directive('ngEcharts',function(){
        return {
            controller: ['$scope','$element', function($scope,$element){
                $scope.chart = echarts.init($element[0]);

                this.getChart = function(){
                    return $scope.chart;
                };

                this.showLoading = function (loadingOption) {

                    var op = loadingOption || {
                            text : '数据加载中',
                            effect : 'bubble',
                            textStyle : {
                                fontSize : 20
                            }
                        };
                    $scope.chart.showLoading(op);
                };

                this.hideLoading = function () {
                    $scope.chart.hideLoading();
                };
            }],
            link: function(scope,element,attrs,ctrl){
                var chart = scope.chart;

                if(!scope.setting) return;

                function refreshChart(){
                    console.log('>>> refresh..');
                    if(angular.isDefined(scope.setting.dataLoaded)){
                        if(scope.setting.dataLoaded === false){
                            if(angular.isDefined(scope.setting.loadingOption)){
                                ctrl.showLoading(scope.setting.loadingOption);
                            }else{
                                ctrl.showLoading();
                            }
                        }else{
                           // chart.clear();
                            chart.setOption(scope.setting.option);
                            chart.resize();
                            ctrl.hideLoading();
                        }
                    }else{
                       // chart.clear();
                        chart.setOption(scope.setting.option);
                        chart.resize();
                    }
                };

                //事件绑定
                function bindevent() {
                    angular.forEach(scope.setting.event, function (value, key) {
                        for (var e in value) {
                            chart.on(e, value[e]);
                        }
                    });
                }

                if(angular.isDefined(scope.setting.event)
                    && angular.isArray(scope.setting.event)){
                    bindevent();
                }
				window.onresize = chart.resize;
                // 设置项
                // event 定义事件
                // dataLoaded 数据是否加载
                // option 数据项
                scope.$watch(
                    'setting',
                    function (value) {if (value) {
                        refreshChart();
                    }},
                    true
                );
                scope.$watch(
                    'refresh',
                    function () {
                        //chart.clear();
                        chart.setOption(scope.setting.option);
                        chart.resize();
                    },
                    true
                );

            },
            scope:{
                setting: '=setting',
                refresh:'=refresh'
            },
            restrict:'EA'
        }
    });