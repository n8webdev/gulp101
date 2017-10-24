const gulp   = require('gulp'),
      uglify = require('gulp-uglify');

// Scripts Task
// Uglifies *.js
gulp.task('scripts', () => {
  // console.log('test');
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
})

// Styles Task
// Minifies *.css
gulp.task('styles', () => {
  console.log('Styles');
})

const tasks = [
  'scripts',
  'styles'
]

gulp.task('default', tasks);