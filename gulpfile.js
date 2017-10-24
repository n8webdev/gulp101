const gulp    = require('gulp'),
      uglify  = require('gulp-uglify'),
      sass    = require('gulp-ruby-sass');
      // plumber =require('gulp-plumber');

// handle errors
const errorLog = error => {
  console.error.bind(error);
  this.emit('end');
}

// Scripts Task
// uglifies *.js
gulp.task('scripts', () => {
  // console.log('test');
  gulp.src('js/*.js')
  // .pipe(plumber())
  .pipe(uglify())
  .on('error', errorLog)
  .pipe(gulp.dest('dist/js'))
})

// Styles Task
// compiles *.scss
gulp.task('styles', function() {
  sass('sass/**/*.scss', {
   style: 'compressed'
  })
  // .pipe(plumber())
  .on('error', errorLog)
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