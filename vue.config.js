module.exports = {
  // 根据环境区分 生产服务器production比如php服务器的地址  和 开发服务器dev的地址
  publicPath: process.env.NODE_ENV === "production" ? "/neo4jclient/" : "/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        common: "@/common"
      }
    }
  },
  devServer: {
    open: true, //启动项目后自动开启浏览器
    // host: '0.0.0.0',//对应的主机名
    port: 9000 //端口号
    // proxy: {}
  },
  // css: {
  //   loaderOptions: {
  //     stylus: {
  //       import: "~@/assets/stylus/_variable.styl"
  //     }
  //   }
  // }
};
