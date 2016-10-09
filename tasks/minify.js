module.exports = (gulp, plugins) => {
    return () => {
        gulp.src('./scripts/index.js')
            .pipe(plugins.minify({
                noSource: true
            }))
            .pipe(gulp.dest('./build-output'))
    }
};