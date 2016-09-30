const device = require('../utils/device');
const cookie = require('../utils/cookie');
const events = require('../utils/events');

const example = function example() {
  // Get device example
  console.log(device);

  // Set cookie example
  cookie.set('test', 'value', 1);

  // Events subscription example
  events.subscribe('breakpointChange', (breakpoint) => {
    console.log(breakpoint);
  });
};

module.exports = example();
