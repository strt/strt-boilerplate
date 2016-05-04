'use strict'

var utils = {
  events: require('./events.js'),
  device: require('./device.js'),
  cookie: require('./cookie.js'),
  easings: {
    swiftOut: [.55, 0, .1, 1],
    appleEase: [0.4, 0.01, 0.165, 0.99],
    appleEaseAlt: [.28, .11, .32, 1]
  }
};

module.exports = utils;
