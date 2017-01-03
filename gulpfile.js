/* eslint-disable */
const gulp = require('gulp');
const tasks = require('strt-gulptasks')({
  output: 'public/dist',
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
  function setProdEnv(done) {
    process.env.NODE_ENV = 'production';
    done();
  },
  tasks.clean,
  gulp.parallel(
    tasks.styles,
    tasks.images,
    tasks.files,
    tasks.icons,
    tasks.scripts
  )
));

