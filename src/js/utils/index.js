'use strict'

var Util = function() {

  this.device = require('./device.js');
  this.cookie = require('./cookie.js');

  // Custom easings
  this.easings = {
    swiftOut: [.55, 0, .1, 1],
    appleEase: [0.4, 0.01, 0.165, 0.99],
    appleEaseAlt: [.28, .11, .32, 1]
  };

  // Native alternative for jQuery $.extend
  this.extend = function(a, b) {
    for(var key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }

    return a;
  };

};

module.exports = new Util();
