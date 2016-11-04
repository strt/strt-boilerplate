/* eslint-disable */

const gulp = require('gulp');
const tasks = require('strt-gulptasks')({
  src: 'src',
  dist: 'public/dist',
});

gulp.task('default', gulp.series(
  tasks.clean,
  gulp.parallel(
    tasks.styles,
    tasks.images,
    tasks.files,
    tasks.icons,
    tasks.scripts
  ),
  tasks.serve
));

gulp.task('production', gulp.parallel(
  tasks.styles,
  tasks.images,
  tasks.files,
  tasks.icons,
  tasks.scripts
));
