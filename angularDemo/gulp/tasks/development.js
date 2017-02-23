'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  runSequence(['vendors','styles', 'images', 'views','config','scripts'], 'watch', cb);

});
// * build-clean
// * build-scripts and build-styles in parallel
// * build-html
// * Finally call the callback function
//    gulp.task('build', function(callback) {
//      runSequence('build-clean',
//          ['build-scripts', 'build-styles'],
//          'build-html',
//          callback);
//    });