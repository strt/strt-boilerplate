'use strict'

var Util = require('../utils');

var Example = function() {

  console.log(Util.device);
  console.log(Modernizr.touchevents);
  console.log(Util.device.getBreakpoint());

};

module.exports = Example();
