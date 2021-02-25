const goods = require("./data/goods.json");
const ratings = require("./data/ratings.json");
const seller = require("./data/seller.json");


module.exports = {
    // baseUrl: "/", //"根路径"
    publicPath: "/",
    outputDir: "dist", //构建输出目录
    assetsDir: "assets", //静态资源目录
    lintOnSave: false, //是否开启eslint保存检测，有效值 true|false|error
    devServer: {
        open: true,
        host: "localhost",// 或者是127.0.0.0 又或者真机测试的时候设置成 0.0.0.0
        port: 8081,      //端口号
        https: false,   //更安全的htpp
        hotOnly: false, //更改模块时 实现热更新
        proxy: {
            //配置跨域
            "/api": {
                target: 'http://localhost:5000/api/', //跨域地址
                ws: true,                             //是否跨域
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            // http://localhost:8081/api/goods
            app.get("/api/goods", (req, res) => {
                res.json(goods);
            });
            app.get("/api/ratings", (req, res) => {
                res.json(ratings);
            });
            app.get("/api/seller", (req, res) => {
                res.json(seller);
            });
        },
    }
};