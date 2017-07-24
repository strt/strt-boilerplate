/**
 * @class Events
 */
class Events {
  events = [];

  /**
   *
   * @param {String} name
   * @param {Void} fn
   */
  on(name, fn) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(fn);
  }

  /**
   *
   * @param {String} name
   * @param {Void} fn
   */
  off(name, fn) {
    if (!this.events[name]) return;
    this.events[name] = this.events[name].filter(item => item !== fn);
  }

  /**
   *
   * @param {String} name
   * @param {Any} payload
   */
  emit(name, payload) {
    if (!this.events[name]) return;
    this.events[name].forEach(fn => fn(payload));
  }
}

export default new Events();
