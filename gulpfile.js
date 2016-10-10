const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const minify = require('./tasks/minify')(gulp, plugins);
const clean = require('./tasks/clean')(gulp, plugins);

gulp.task('clean', clean);
gulp.task('minify', minify);
gulp.watch('./scripts/*.js', [clean, minify]);