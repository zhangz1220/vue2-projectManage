/* 控制菜单是否折叠 */
import http from "axios"
export default {
    namespaced: true,
    state: {
        isCollapse: false,
        homeTilet: '',
    },
    //请求服务
    actions: {
        //调api
        getTitle(context, val) {
            http.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                response => {
                    context.commit('GET_TITLE', response.data)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        //控制菜单是否折叠
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //
        GET_TITLE(state, val) {
            state.homeTilet = val
        }
    },
    getters: {

    }
}