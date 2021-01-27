var { watch, src, dest, parallel, series, } = require('gulp');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');
var scss = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var typograf = require('gulp-typograf');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('cssnano');

// Девсервер
function devServer(cb) {
  var params = {
    watch: true,
    reloadDebounce: 150,
    notify: false,
    server: { baseDir: './build' },
  };

  browserSync.create().init(params);
  cb();
}

// Сборка
function buildPages() {
  return src('src/pages/*.pug')
    .pipe(pug())
    .pipe(typograf({ locale: ['ru', 'en-US'] }))
    .pipe(dest('build/'));
}


function buildStyles() {
  return src('src/styles/style.scss')
   .pipe(scss())
   .pipe(postcss([cssnano()]))
   .pipe(autoprefixer({
    cascade: false
}))
   .pipe(dest('build/styles/'));
}


function buildScripts() {
  return src('src/scripts/**/*.js')
    .pipe(dest('build/scripts/'));
}


function buildAssets(cb) {
  src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
    .pipe(dest('build/assets/'));
  src('src/assets/img/**/*.*')
    .pipe(imagemin())
    .pipe(dest('build/assets/img'));
  cb();
}

// Отслеживание
function watchFiles() {
  watch('src/pages/*.pug', buildPages);
  watch('src/styles/*.scss', buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

exports.default =
  parallel(
    devServer,
    series(
      parallel(buildPages, buildStyles, buildScripts, buildAssets),
      watchFiles
    )
  );
