module.exports = {
  output: 'public/dist',
  styles: {
    entries: ['./app.scss'],
  },
  scripts: {
    publicPath: '/dist/scripts',
    entries: {
      app: './app.js',
    },
  },
  serve: {
    server: 'public',
  },
};
