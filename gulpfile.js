///////////////* Setup *///////////////

var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge-stream'),
  imageminPngquant = require('imagemin-pngquant'),
  // concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  // concatCss = require('gulp-concat-css'),
  minifyCSS = require('gulp-minify-css'),
  rename = require("gulp-rename"),
  minifyHTML = require('gulp-minify-html'),
  // uncss = require('gulp-uncss'),
  inlinesource = require('gulp-inline-source');

///////////////* Stream *///////////////

// Clean Dist
gulp.task('clean', function (cb) {
  del(['./dist/**'], cb);
});

// Move JPGs Into Dist (Unfortunately, I cannot use imagemin because I run Win7 :'( )
gulp.task('images', function() {
  return gulp.src('./src/img/*.jpg')
    .pipe(gulp.dest('./dist/img'));
});

// Optimize PNGs
gulp.task('pngs', ['images'], function () {
  return gulp.src('./src/img/*.png')
    .pipe(imageminPngquant({quality: '65-80', speed: 4})())
    .pipe(gulp.dest('./dist/img'));
});

// Concatenate And Minify JavaScript
gulp.task('scripts', ['pngs'], function(){
  return gulp.src('./src/js/bootstrap.js')
    .pipe(rename('bootstrap.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

/* TODO: Figure out how to unCSS bootstrap
// UnCSS Pizza HTML
gulp.task('uncss', ['scripts'], function() {
  return gulp.src('./src/views/css/bootstrap-grid.css')
    .pipe(uncss({html: './src/views/pizza.html'}))
    .pipe(gulp.dest('./dist/views/css'));
});
*/

// Minify CSS
gulp.task('styles', ['scripts'], function(){
  var style = gulp.src('./src/css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
  var bootstrap = gulp.src('./src/css/bootstrap.css')
    .pipe(rename('bootstrap.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
  var bootstrapTheme = gulp.src('./src/css/bootstrap-theme.css')
    .pipe(rename('bootstrap-theme.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));

  return merge(style, bootstrap, bootstrapTheme);
});

// Minify HTML
gulp.task('html', ['styles'], function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./src/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist'));
});

// Inline HTML Sources
gulp.task('inline', ['html'], function() {
  return gulp.src('./dist/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist'));
});

///////////////* Default *///////////////
// DEFAULT Group: Optimize, Build, then Deploy
gulp.task('default', ['images', 'pngs', 'scripts', 'styles', 'html', 'inline']);

///////////////* Watch *///////////////
// Watch
gulp.task('watch', function () {
    gulp.watch('./src/**', ['default']);
});