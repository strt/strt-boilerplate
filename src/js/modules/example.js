'use strict'

var Util = require('../utils');

var Example = function() {

  console.log(Util.device);
  console.log(Modernizr.touchevents);

};

module.exports = Example();
