const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-ejs', () => {
  return gulp.src('templates/*.ejs')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('view'));
});

gulp.task('minify-css', () => {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('public/build/css'));
});