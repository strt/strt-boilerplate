import { viewport, events, cookie, url } from '../utils';

function example() {
  // Get viewport example
  console.log(viewport);

  // Get url params example
  console.log('params', url.getParams());

  // Set cookie example
  cookie.set('cookieName', 'cookieValue', 1);

  // Events subscription example
  events.on('viewportUpdate', (data) => {
    console.log(data);
  });
}

export default example();
