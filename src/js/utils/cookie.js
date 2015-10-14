'use strict';

module.exports = (function() {

  var self = {};

  // Set Cookie
  self.set = function(name, value, time) {
    var expires = null;
    if(time) {
      var date = new Date();
      date.setTime(date.getTime()+(time*24*60*60*1000));
      expires = "; expires="+date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  };

  // Get cookie
  self.get = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    var i = ca.length;
    while(i--) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1,c.length);
      if(c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  // Delete cookie
  self.delete = function(name) {
    self.set(name,"",-1);
  };

  return self;

})();