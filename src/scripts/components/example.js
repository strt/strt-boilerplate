import { Viewport, Event } from '../utils';

const example = () => {
  // Get viewport
  console.log('🖥', Viewport.breakpoint);

  // Event subscription
  Event.on('breakpoint', (bp) => {
    console.log('🖥', bp);
  });
};

export default example();
