'use strict'

var Device = function() {

  this.getBreakpoint = function() {
    return window.getComputedStyle ? window.getComputedStyle(document.body,':after').getPropertyValue('content').replace(/['"]+/g, '') : 'desktop'
  };
  this.breakpoint = this.getBreakpoint();
  this.isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || this.breakpoint === 'mobile' || this.breakpoint === 'tablet' ? true : false;

};

module.exports = new Device();
