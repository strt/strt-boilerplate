'use strict'

var events = {
  events: {},
  subscribe: function(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  unsubscribe: function(eventName, fn) {
    if (!this.events[eventName]) {
      console.warn(eventName + ' does not exist in events object');
      return;
    }

    for (var i = 0; i < this.events[eventName].length; i++) {
      if (this.events[eventName][i] === fn) {
        this.events[eventName].splice(i, 1);
        break;
      }
    };
  },
  publish: function(eventName, data) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach(function(fn) {
      fn(data);
    });
  }
};

module.exports = events;
