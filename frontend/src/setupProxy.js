const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    "/sentiment-analysis",
    createProxyMiddleware({
      target: 'https://naveropenapi.apigw.ntruss.com',
      changeOrigin: true,
    })
  )
  app.use(
    "/user-service",
    createProxyMiddleware({
      target: 'http://k6a308.p.ssafy.io:8001/',
      changeOrigin: true,
    })
  )
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  )
};