/**
 * Created by liekkas on 15/9/27.
 */
(function (app) {
    'use strict';
    // console.log("AppSettings--->");

    var appBaseUrl = 'http://localhost:3000'; //应用地址
    var restBaseUrl = 'http://192.168.18.163:10086/rest/'; //REST数据源的ip地址，注意可能和部署的不一致，需要考虑跨域情况

    var AppSettings = {
        //------------------应用设置------------------------
        appBaseUrl: appBaseUrl,
        appContextPath: '/',  //上下文路径
        appTitle: '',

        //------------------Restful设置------------------------
        restBaseUrl: restBaseUrl,
        rest:{
            //根据搜索字符串获取模糊匹配的客户信息
            //'getVipsBySearchString': restBaseUrl + 'vips/',
            //'getAllVips': restBaseUrl + 'all',
            //'getVipTypes': restBaseUrl + '/vips/types'
        },
        taskParam:"",


    };
    app.constant('AppSettings', AppSettings);

})(angular.module(APP_NAME));