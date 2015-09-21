module.exports = [
  {
    pattern: /webdav\/files\/resources\/(.*.js.*|.*.css.*)/,
    responder:  __dirname + "/public/dist/$1"
  }
];
