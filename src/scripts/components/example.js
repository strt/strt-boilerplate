import { Viewport, Event } from '../utils';

const example = () => {
  // Get viewport example
  console.log('🖥', Viewport.breakpoint);

  // Event subscription example
  Event.on('breakpoint', (bp) => {
    console.log('🖥', bp);
  });

  Event.emit('breakpoint', 'woo');

  console.log('after');
};

export default example();
