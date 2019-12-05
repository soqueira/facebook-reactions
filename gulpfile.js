const gulp = require('gulp');
const babel = require('gulp-babel');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./src/css/**/*.css')
    .pipe(concat('style.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/css/'))
}
function minJs() {
  return gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(rename('reactions.min.js'))
    .pipe(gulp.dest('./dist/js/'));
}
function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
}
gulp.watch('./src/css/*.css', style).on('change', browserSync.reload);
gulp.watch('./**/*.html').on('change', browserSync.reload);
gulp.watch('./**/*.js').on('change', browserSync.reload);

gulp.task('default', gulp.series(style, minJs, watch));