var http = require('http')

// 1. 创建 Server
var server = http.createServer()

// 2. 监听 request 请求事件，设置请求处理函数
server.on('request', function(req, res) {
    console.log('收到请求了，请求路径是：' + req.url)
        // console.log('请求我的客户端的地址是：', req.socket.remoteAddress, req.socket.remotePort)

    var url = req.url

    if (url === '/userinfo') {
        var user = [
            { name: '张三', age: 18 },
        ]

        // 响应内容只能是二进制数据或者字符串
        //  数字
        //  对象
        //  数组
        //  布尔值
        res.end(JSON.stringify(user))
    } else {
        res.end('404 Not Found......')
    }
})

// 3. 绑定端口号，启动服务
server.listen(5000, function() {
    console.log('服务器启动成功，可以通过 http://localhost:5000/ 访问了。。。')
})