'use strict';

var config       = require('../config');
var gulp         = require('gulp');

/**
 * 把第三方包引进项目
 *  - 拷贝一份到开发包
 *  - 拷贝一份到发布包
 */

var func = function () {
    var n = config.vendors.src.length;
    for(var i=0;i<n;i++){
        gulp.src(config.vendors.src[i].path)
            .pipe(gulp.dest(config.vendors.devDest+'/'+config.vendors.src[i].name))
            .pipe(gulp.dest(config.vendors.pubDest+'/'+config.vendors.src[i].name));
    }
};

gulp.task('vendors',['clean-vendors'], func);
//-快捷方式
gulp.task('v',['clean-vendors'], func);

