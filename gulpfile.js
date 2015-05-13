var gulp  = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var liveReload = require('gulp-livereload');

gulp.task('build', shell.task([
    'echo Building the CV',
    'pandoc --standalone -c style.css --from markdown --to html -o build/cv.html src/cv.md',
    'echo DONE!'
]));

gulp.task('sass', function() {
    gulp.src('src/styles/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('build'))
        .pipe(liveReload());
});

gulp.task('watch', function() {
    liveReload.listen();
    gulp.watch('src/**/*', ['sass', 'build']);
});

gulp.task('default', ['sass', 'build', 'watch']);