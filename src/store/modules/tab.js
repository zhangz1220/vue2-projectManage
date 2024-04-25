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
            http.get("https://api.oioweb.cn/api/common/OneDayEnglish").then(
                res => {
                    context.commit('GET_TITLE', res.data.result.note)
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