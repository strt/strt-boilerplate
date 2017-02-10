import { viewport, events, cookie } from '../utils';

function example() {
  // Get viewport example
  console.log(viewport);

  // Set cookie example
  cookie.set('cookieName', 'cookieValue', 1);

  // Events subscription example
  events.on('viewportUpdate', (data) => {
    console.log(data);
  });
}

export default example();
