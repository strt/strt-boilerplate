'use strict'

var utils = require('../utils');

var example = function() {

  // Get device example
  console.log(utils.device);

  // Set cookie example
  utils.cookie.set('test', 'value');

  // Events subscription example
  utils.events.subscribe('breakpointChange', function(breakpoint) {
    console.log(breakpoint);
  });

};

module.exports = example();
