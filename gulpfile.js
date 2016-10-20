const gulp = require('gulp');
const clean = require('./tasks/clean')();
const concat = require('./tasks/concat')(gulp);
const runSequence = require('gulp-run-sequence');

gulp.task('clean', clean);
gulp.task('build-js', concat);
gulp.task('watch', () => {
    gulp.watch('./scripts/*.js', ['run']);
});

gulp.task('run', () => {
    runSequence('clean', 'build-js', () => {
        console.log('done!');
    });
});

gulp.task('default', ['watch']);