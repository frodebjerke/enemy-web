var gulp = require('gulp');
var browserify = require('gulp-browserify');

var jsStart = 'app/app.js';
var jsBuild = 'build';
var jsWatch = 'app/**/*.js';

gulp.task('js', function() {
  gulp.src(jsStart)
    .pipe(browserify({
      insertGlobals : true,
    }))
    .pipe(gulp.dest(jsBuild))
});

gulp.task('watch-js', ['js'], function () {
  gulp.watch(jsWatch, ['js'])
});

gulp.task('default', ['watch-js']);

gulp.task('bundle', ['js']);
