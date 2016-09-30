const gulp = require('gulp');
const tasks = require('strt-gulpfile')({
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

gulp.task('production', gulp.series(
  gulp.parallel(
    tasks.styles,
    tasks.images,
    tasks.files,
    tasks.icons,
    tasks.scripts
  )
));
