/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/users',
    createProxyMiddleware({
      target: 'http://api.github.com',
      changeOrigin: true,
    }),
  );
};
