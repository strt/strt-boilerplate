'use strict';

module.exports = (function() {

  var self = {};

  self.device = require('./device.js');
  self.cookie = require('./cookie.js');
  self.xmlToJson = require('./xmlToJson.js');
  self.number = require('./number.js');

  // Custom easings
  self.easings = {
    swiftOut: [.55, 0, .1, 1],
    appleEase: [0.4, 0.01, 0.165, 0.99],
    appleEaseAlt: [.28, .11, .32, 1]
  };

  // Native alternative for jQuery $.extend
  self.extend = function(a, b) {
    for(var key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }

    return a;
  };

  return self;

})();
