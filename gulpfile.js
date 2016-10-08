const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const minify = require('./tasks/minify')(gulp, plugins);

gulp.task('minify', minify);
gulp.watch('./scripts/*.js', [minify]);