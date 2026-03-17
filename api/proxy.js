const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = process.env.DEFAULT_TARGET_URL || "https://www.google.com/"; //你的网址
  //   if (
  //     req.url.startsWith("/api") ||
  //     req.url.startsWith("/auth") ||
  //     req.url.startsWith("/banner") ||
  //     req.url.startsWith("/CollegeTask")
  //   ) {
  //     target = process.env.INNER_TARGET_URL || "http://106.15.2.32:6969"; // 内网服务器地址也可通过环境变量配置，同样保留默认值
  //   }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://google.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
