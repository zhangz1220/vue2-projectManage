module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js'
        },
    },

    //开启代理服务器 (方式一)
    /* devServer: {
        proxy: 'http://localhost:3000' // 请求的真实端口是3000
    }, */
    //开启代理服务器 (方式二)
    devServer: {
        proxy: {
            '/api/': { //当请求的前缀是 /api,它 紧跟端口号后面,   eg: http://localhost:8081/api/userinfo
                target: 'http://localhost:5000',
                pathRewrite: { '^/api': '/' } //重写路径: 将 所有以 /api的路径，/api 置为空,接口获取的请求入参就没有 /api 了
                // ws: true, //用于支持 websocket 默认true
                // changeOrigin: true //用于控制请求头中的host值  默认true
            },
            '/apiManage/': {
                target: 'http://localhost:1111',
                pathRewrite: { '^/apiManage': '/' }
            }
        }
    }
}