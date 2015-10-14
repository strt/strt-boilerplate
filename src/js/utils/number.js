'use strict';

module.exports = (function() {
  var self = {};
  
  // Format number
  self.format = function(number) {
    return Math.max(0, number).toFixed(0).replace(/(?=(?:\d{3})+$)(?!^)/g, ' ');
  };

  return self;

})();
