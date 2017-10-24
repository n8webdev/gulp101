const gulp   = require('gulp'),
      uglify = require('gulp-uglify');

// Scripts Task
// uglifies *.js
gulp.task('scripts', () => {
  // console.log('test');
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
})

// Styles Task
// minifies *.css
gulp.task('styles', () => {
  console.log('Styles');
})

// Watch Task
// watches js/*js
gulp.task('watch', () => {
  gulp.watch('js/*.js', ['scripts'])
})


const tasks = [
  'scripts',
  'styles',
  'watch'
]

// todo: implement gulp-htmlrender
gulp.task('default', tasks);