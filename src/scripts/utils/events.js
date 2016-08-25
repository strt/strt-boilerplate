'use strict';

const events = {
  events: {},
  subscribe(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  unsubscribe(eventName, fn) {
    if (!this.events[eventName]) {
      return;
    }

    for (let i = 0; i < this.events[eventName].length; i++) {
      if (this.events[eventName][i] === fn) {
        this.events[eventName].splice(i, 1);
        break;
      }
    }
  },
  publish(eventName, data) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach(function(fn) {
      fn(data);
    });
  }
};

module.exports = events;
