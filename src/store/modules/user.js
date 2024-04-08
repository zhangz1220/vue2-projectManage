/* 用户信息 */
import http from "axios"
const user = {
    namespaced: true, //开启命名空间
    state: {
        username: 'sdfrsdg',
        userinfo: {
            username: '',
            userId: '',
            authority: '超级管理员',
            password: '',
        },
        isCollapse: false,
        sum: 0,
    },
    actions: {

    },
    mutations: {
        //修改用户信息
        changeUserinfo(state, val) {
            console.log("修改用户信息")
                //修改store数据
            state.userinfo.username = val.username
            state.userinfo.password = val.password
        },
    },
    getters: {
        //姓
        firstName(state) {
            return "王"
        }
    }
}
export default user