/* eslint-disable */
const gulp = require('gulp');
const tasks = require('strt-gulptasks')({
  source: 'src',
  output: 'public/dist',
  scripts: {
    publicPath: '/dist/scripts',
  },
  serve: {
    server: 'public',
    files: ['public/*.html'],
  }
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

