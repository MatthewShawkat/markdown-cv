var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task([
    'echo Building the CV',
    'pandoc --standalone -c src/styles/style.css --from markdown --to html -o build/cv.html src/cv.md',
    'echo DONE!'
]));