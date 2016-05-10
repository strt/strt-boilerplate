'use strict'

var utils = {
  events: require('./utils/events.js'),
  device: require('./utils/device.js'),
  cookie: require('./utils/cookie.js'),
  easings: {
    swiftOut: [0.55, 0, 0.1, 1],
    appleEase: [0.4, 0.01, 0.165, 0.99],
    appleEaseAlt: [0.28, 0.11, 0.32, 1]
  }
};

module.exports = utils;
