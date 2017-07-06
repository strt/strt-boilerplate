import { Viewport, Events, Cookie } from '../utils';

const example = () => {
  // Get viewport example
  console.log('🖥', Viewport.breakpoint);

  // Set cookie example
  Cookie.set('cookie', 'This is a sample cookie', 1);

  // Get cookie example
  console.log('🍪', Cookie.get('cookie'));

  // Event subscription example
  Events.on('breakpoint', (bp) => {
    console.log('🖥', bp);
  });
};

export default example();
