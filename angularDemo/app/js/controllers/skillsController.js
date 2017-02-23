/**
 * Created by Administrator on 2017/2/21.
 */
(function(app){
    app.controller("skillsController",skills);
    function skills($scope){

       //var myChart = echarts.init(document.getElementById('echarts'));

        // 指定图表的配置项和数据
        $scope.option = {
            option:{
                title: { text: '' },
                tooltip: {
                    show:true,
                    formatter :function(data){
                        return data.name + '：' + data.value +'%'
                    },
                    backgroundColor :'#14c8d4'
                },
                xAxis: {
                    data: ["html5+css3","Jquery","Angular","React","Mui","Bootstrap","Echarts",'Lodash']
                },
                yAxis: {
                    max:100
                },
                series: [{
                    name: '掌握率',
                    type: 'bar',
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 10,
                            color:'#14c8d4'
                        }
                    },
                    barMaxWidth :'60%',
                    data: [60, 50, 55, 30, 60, 50,60,30]
                }]
            }
        };
        // 使用刚指定的配置项和数据显示图表。
        //myChart.setOption(option);

    }

})(angular.module(APP_NAME));