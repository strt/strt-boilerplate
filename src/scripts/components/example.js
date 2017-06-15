import { Viewport, Events, Cookie } from '../utils';

function example() {
  // Get viewport example
  console.log('🖥', Viewport.breakpoint);

  // Set cookie example
  Cookie.set('cookie', 'This is a sample cookie', 1);

  // Get cookie example
  console.log('🍪', Cookie.get('cookie'));

  // Events subscription example
  Events.on('breakpoint', (bp) => {
    console.log('🖥', bp);
  });
}

export default example();
