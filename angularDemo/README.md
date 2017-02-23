### 项目运行：

> 开发模式：gulp dev
> 发布模式：gulp public


### 第三方包引用

> 引用定义及公共库路径军配置到：gulp/config.js中修改
一共有三种来源的包：
> 使用nodejs管理的包，把相关的包安装在node_modules中，比如 E://node_modules
> 使用bower管理的包，把相关的包安装在bower_components中，比如 E://bower_components
> 没有发布到nodejs/bower的包，比如内部开发的组件等，放到svn中 http://192.168.106.58:57880/svn/inm/YLIB/js-components，然后checkout到本地目录，比如：E://js-components

项目引用的包基本上通过配置来定义。


### 项目所用技术说明

框架采用：angularjs，项目组织及代码规范参考 https://github.com/johnpapa/angular-styleguide
样式框架采用：semantic-ui 官网：http://semantic-ui.com/
工具类采用：lodash  官网：https://lodash.com/
图表组件采用：echarts https://github.com/ecomfe/echarts
项目编译：gulp 

