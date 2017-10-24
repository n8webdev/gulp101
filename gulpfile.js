const gulp   = require('gulp'),
      uglify = require('gulp-uglify'),
      sass   = require('gulp-ruby-sass');

// Scripts Task
// uglifies *.js
gulp.task('scripts', () => {
  // console.log('test');
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
})

// Styles Task
// compiles *.scss
gulp.task('styles', function() {
  sass('sass/**/*.scss', {
   style: 'compressed'
  })
   .pipe(gulp.dest('dist/css'));
 });

// Watch Task
// watches js/*js
gulp.task('watch', () => {
  gulp.watch('js/*.js', ['scripts'])
  gulp.watch('sass/**/*.scss', ['styles'])
})


const tasks = [
  'scripts',
  'styles',
  'watch'
]

// todo: implement gulp-htmlrender
gulp.task('default', tasks);