module.exports = (gulp, plugins) => {
    return function () {
        gulp.src('./scripts/index.js')
            .pipe(plugins.minify({
                noSource: true
            }))
            .pipe(gulp.dest('./build-output'))
    }
};