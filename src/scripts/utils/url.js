const url = {
  getParams() {
    if (!window.location.search.length) return undefined;

    return window.location.search
      .substring(1)
      .split('&')
      .map(i => i.split('='))
      .reduce((obj, [key, value = '']) => (
        Object.assign(obj, { [key]: decodeURIComponent(value) })
      ), {});
  },

  getParam(key) {
    const params = this.getParams();
    return params && params[key];
  },

  buildParams(params) {
    return Object.keys(params)
      .map(key => `${key}=${decodeURIComponent(params[key])}`)
      .join('&');
  },
};

export default url;
