import events from './events';

const viewport = {
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
    const newBreakpoint = window.getComputedStyle(document.body, ':after')
      .getPropertyValue('content')
      .replace(/['"]+/g, '');

    if (this.breakpoint !== newBreakpoint) {
      this.breakpoint = newBreakpoint;
      events.emit('viewportUpdate', this.breakpoint);
    }
  },
};

export default viewport.init();
