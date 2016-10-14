'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';

const paths = {
  scssSource: './public/styles/**/*.scss',
  scssDest: './public/assets/styles',
  jsSource: ['./public/app/app.module.js', './public/app/**/*.js'],
  jsDest: './public',
  serverSource: ['./server/**/*.js'],
  serverDest: './public'
};

gulp.task('styles', () => {
  return gulp.src(paths.scssSource)
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(paths.scssDest));
});

gulp.task('frontjs', () => {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(paths.jsDest));
});

// gulp.task('serverjs', () => {
//   return gulp.src(paths.serverSource)
//     .pipe(plumber())
//     .pipe(babel({
//       presets: ["es2015"]
//     }))
//     .pipe(concat('dist.js'))
//     .pipe(gulp.dest(paths.serverDest));
// });

gulp.task('watch', () =>  {
  gulp.watch(paths.jsSource, ['frontjs']);
  gulp.watch(paths.scssSource, ['styles']);
  // gulp.watch(paths.serverSource, ['serverjs']);
});

gulp.task('default', ['watch', 'frontjs', 'styles']);
