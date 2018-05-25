var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

gulp.task('copyHTML', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
  return gulp.src('src/stylesheets/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/stylesheets/'));
});

gulp.task('minify', function(cb) {
  pump([
      gulp.src('src/scripts/*.js'),
      uglify(),
      gulp.dest('dist/scripts/')
    ],
    cb
  );
});

gulp.task('copyJS', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('concat', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('imagemin', function() {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/stylesheets/*.sass', ['sass']);
  // gulp.watch('src/scripts/*.js', ['minify']);
  // gulp.watch('src/scripts/*.js', ['copyJS']);
  gulp.watch('src/scripts/*.js', ['concat']);
  gulp.watch('src/images/*', ['imagemin']);
});
