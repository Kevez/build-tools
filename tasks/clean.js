module.exports = (gulp, plugins) => {
    return () => {
        gulp.src('./build-output')
            .pipe(plugins.clean({
                read: false
            }));
    };
};