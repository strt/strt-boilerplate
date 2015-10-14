'use strict';

module.exports = (function() {

  var self = {};

  self.breakpoint = window.getComputedStyle ? window.getComputedStyle(document.body,':after').getPropertyValue('content').replace(/['"]+/g, '') : 'desktop';
  self.isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || self.breakpoint === 'mobile' || self.breakpoint === 'tablet' ? true : false;
  self.oldie = '';

  return self;

})()