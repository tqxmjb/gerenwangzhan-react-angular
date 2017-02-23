'use strict';


var plugins = 'E://plugins'
var publicPath = 'build'; //发布输出路径

module.exports = {

  'publicPath' : publicPath,

  'browserPort'  : 13000,
  'UIPort'       : 13001,
  'serverPort'   : 13002,

  //-----------第三方框架引用----------
  'vendors': {
    'src': [
      {
        name: 'jquery',
        path: plugins+'/jquery/dist/*.min.js'
      },
      {
        name: 'lodash',
        path: plugins+'/lodash/dist/*.min.js'
      },
      {
        name: 'angular',
        path: plugins+'/angular/*.min.js'
      },
      {
        name: 'semantic',
        path: plugins+'/semantic-ui/dist/**/*'
      },
      {
        name: 'layer',
        path: plugins+'/layer/**'
      },
      {
        name: 'mnmenu',
        path: plugins+'/mnmenu/**'
      },
      {
        name: 'echarts',
        path:  plugins+'/echarts3/echarts.min.js'
      },
      {
        name: 'My97DatePicker',
        path: plugins+'/My97DatePicker/**/*'
      },
      {
        name: 'bootstrap',
        path: [
          plugins+'/bootstrap/dist/js/*.min.js',
          plugins+'/bootstrap/dist/css/bootstrap.min.css'
        ]
      },
      {
        name: 'wow',
        path: [
          plugins+'/wow/*.min.js',
        ]
      },
      {
        name: 'ngplugins',
        path: [
          plugins+'/angular-ui-router/release/*.min.js', //ui-router
          plugins+'/SemanticUI-Angular/*.min.js', //angular-semantic
          plugins+'/ngInfiniteScroll/build/*.min.js', //ngInfinite
          plugins+'/ng-echarts/dist/*.js',  //angular-echarts
          plugins+'/excellentexport-master/excellentexport.js'

        ]
      }],
    'devDest': 'app/assets/vendors',  //复制到开发包下
    'pubDest': publicPath + '/assets/vendors'  //复制到开发包下
  },

  //--------------sass样式编译--------------
  'styles': {
    'src' : 'app/assets/scss/**/*.scss',
    'dest': publicPath+'/assets/css',
    'devDest' : 'app/assets/css',   //编译时也同时输入到app下，便于开发使用快捷提示
    'prodSourcemap': false,
    'sassIncludePaths': []
  },

  'scripts': {
    'src' : ['app/js/main.js','app/js/**/*.js','!app/js/app.js'],
    'devDest': 'app/js',
    'pubDest': publicPath+'/js'
  },

  'images': {
    'src' : 'app/assets/images/**/*',
    'dest': publicPath+'/assets/images'
  },

  //--------------视图--------------
  'views': {
    'index': 'app/index.html',
    'watch': [
      'app/index.html',
      'app/views/**/*.html'
    ],
    'src': 'app/views/**/*.html',
    'dest': 'app/js'
  },
  'config':{
    'src':'app/assets/config/*.json',
    'devDest': 'app/assets/config',
    'pubDest': publicPath+'/assets/config'
  },

  'gzip': {
    'src': publicPath+'/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': publicPath+'/',
    'options': {}
  }

};
