var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    connect = require('gulp-connect');

var serverOptions = {};

serverOptions = {
  root : ['app'],
  port : 3501
};

gulp.task('server', connect.server(serverOptions));


gulp.task('jshint', function()  {
  gulp.src('app/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});