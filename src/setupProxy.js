const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const localMode = true;
  // const localMode = false;

  app.use(
    "/api",
    createProxyMiddleware({
      target: localMode
        ? "http://localhost:5000/api"
        : "",
      changeOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    })
  );
};
