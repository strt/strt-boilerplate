/**
 * @class Event
 */
class Event {
  topics = [];
  /**
   *
   * @param {String} name
   * @param {Void} fn
   */
  on(name, fn) {
    this.topics[name] = this.topics[name] || [];
    this.topics[name].push(fn);
  }

  /**
   *
   * @param {String} name
   * @param {Void} fn
   */
  off(name, fn) {
    if (!this.topics[name]) return;
    this.topics[name] = this.topics[name].filter(item => item !== fn);
  }

  /**
   *
   * @param {String} name
   * @param {Any} payload
   * @param {Boolean} async
   */
  emit(name, payload, async = true) {
    if (!this.topics[name]) return;
    this.topics[name].forEach((fn) => {
      if (async) {
        setTimeout(() => fn(payload), 0);
        return;
      }
      fn(payload);
    });
  }
}

export default new Event();
