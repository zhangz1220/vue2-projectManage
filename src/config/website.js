/**
 * 全局配置文件
 */
const currentPort = window.location.port; //当前访问的端口号
console.log('当前访问的端口号===', currentPort)
export default {
    url: 'http://localhost:' + currentPort, //http://localhost:8088
}