const target = 'http://api.rasp.yandex.net/'; 
const PROXY_CONFIG = {
  "/v3.0/**": {
    "target": target,
    "secure": false,
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;
