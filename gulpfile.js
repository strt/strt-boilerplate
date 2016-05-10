'use strict';

var gulp = require('gulp');

var tasks = require('../strt-gulpfile')({
  src: 'src',
  dist: 'public/dist'
});

gulp.task('default', gulp.series(
  tasks.clean,
  gulp.parallel(
    tasks.styles,
    tasks.files,
    tasks.scripts
  )
));
