const gulp   = require('gulp'),
      uglify = require('gulp-uglify');

gulp.task('default', () => {
  // console.log('Hello Gulp');
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})