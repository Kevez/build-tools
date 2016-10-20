const concat = require('gulp-concat')
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify');

module.exports = (gulp) => {
    return () => {
        gulp.src('./scripts/*.js')
            .pipe(concat('build.js'))
            .pipe(rename('build.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./build-output'));
    };
};