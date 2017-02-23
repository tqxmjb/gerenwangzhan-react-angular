/**
 * Created by Administrator on 2016/6/6.
 */
'use strict';
var config         = require('../config');
var gulp           = require('gulp');
var jsonMinify = require('gulp-json-minify');
gulp.task('config', function() {
    return gulp.src(config.config.src)
        .pipe(jsonMinify())
        .pipe(gulp.dest(config.config.pubDest))
});