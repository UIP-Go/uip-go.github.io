var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const minify = require('gulp-minify');

gulp.task('dev', function () {
    browserSync.init({
        server: {
            baseDir: "../"
        },
        files: ['../index.html', '../public/pages/*.html', '../public/app/*.js']
    });
    gulp.series('sass');
    gulp.series('scriptify');
    gulp.watch("../dev/sass/*.scss", gulp.series('sass'));
    gulp.watch("../dev/script/*.js", gulp.series('scriptify'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("../public/app/*").on('change', browserSync.reload);
    gulp.watch("../public/posts.js").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src("../dev/sass/core.scss")
        .pipe(sass())
        .pipe(gulp.dest("../public/css"))
        .pipe(browserSync.stream());
});

gulp.task('scriptify', function () {
    return gulp.src("../dev/script/*.js")
        .pipe(minify())
        .pipe(gulp.dest("../public/app"));

});

gulp.task('distribute', function () {

});