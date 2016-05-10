'use strict'

var events = require('./events.js');

var device = {
  breakpoint: 'desktop',
  init: function() {
    this.bindEvents();
    this.setBreakpoint();
    return this.breakpoint;
  },
  bindEvents: function() {
    window.addEventListener('resize', this.setBreakpoint.bind(this));
  },
  setBreakpoint: function() {
    if (!window.getComputedStyle) {
      return;
    }

    var newBreakpoint = window.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/['"]+/g, '');
    if (this.breakpoint !== newBreakpoint) {
      this.breakpoint = newBreakpoint;
      events.publish('breakpointChange', this.breakpoint);
    }
  }
};

module.exports = device.init();
