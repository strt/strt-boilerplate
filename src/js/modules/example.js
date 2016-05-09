'use strict'

var $ = require('jquery');

var utils = require('../utils');

var example = function() {

  // Get device example
  console.log(utils.device);

  // Set cookie example
  utils.cookie.set('test', 'value', 1);

  // Events subscription example
  utils.events.subscribe('breakpointChange', function(breakpoint) {
    console.log(breakpoint);
  });

};

module.exports = example();
