'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var templateCache  = require('gulp-angular-templatecache');

gulp.task('views', function() {

  gulp.src(config.views.index)
    .pipe(gulp.dest(config.publicPath));

  return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({ once: true }));

});