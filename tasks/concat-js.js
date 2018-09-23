module.exports = function(gulp, $, browserSync) {
    gulp.task('concat-js', function() {
        return gulp.src([
                'bower_components/offline/offline.min.js',
                'bower_components/angular/angular.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'bower_components/angular-animate/angular-animate.min.js',
                'bower_components/angular-sanitize/angular-sanitize.min.js',
                'node_modules/ui-bootstrap4/distui-bootstrap.js',
                'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                'bower_components/angular-toastr/dist/angular-toastr.min.js',
                'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
                'bower_components/angular-resource/angular-resource.min.js'
            ])
            .pipe($.concat('addons.js'))
            .pipe(gulp.dest('./dist/js'));
    });
};
