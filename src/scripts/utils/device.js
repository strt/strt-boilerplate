const events = require('./events.js');

const device = {
  breakpoint: 'desktop',
  init() {
    this.bindEvents();
    this.setBreakpoint();

    return this.breakpoint;
  },
  bindEvents() {
    window.addEventListener('resize', this.setBreakpoint.bind(this));
  },
  setBreakpoint() {
    if (!window.getComputedStyle) {
      return;
    }

    const newBreakpoint = window.getComputedStyle(document.body, ':after')
      .getPropertyValue('content')
      .replace(/['"]+/g, '');

    if (this.breakpoint !== newBreakpoint) {
      this.breakpoint = newBreakpoint;
      events.publish('breakpointChange', this.breakpoint);
    }
  },
};

module.exports = device.init();
