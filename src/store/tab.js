// export default {
//     state: {
//         isCollapse: false,
//         sum: 0,
//     },
//     //请求服务
//     actions: {
//         /* //加法
//         jia({ commit }, val) {
//             console.log('commit', commit)
//             commit('JIA', val)
//         },
//         //减法
//         jian(context, val) {
//             console.log('context', context)
//             context.commit('JIAN', val)
//         }, */
//         //判断是否为奇数，奇数加
//         jiaOdd(context, val) {
//             console.log('context', context)
//             if (context.state.sum % 2) {
//                 context.commit('JIA', val)
//             }
//         },
//         //延时0.5秒 加
//         jiaWaite({ commit }, val) {
//             setTimeout(() => {
//                 commit('JIA', val)
//             }, 500)
//         }
//     },
//     mutations: {
//         //加法
//         JIA(state, val) {
//             console.log('state', state)
//             state.sum += val
//         },
//         //减法
//         JIAN(state, val) {
//             console.log('state', state)
//             state.sum -= val
//         },
//         ADD_PERSON(state, val) {

//         },

//         //控制菜单是否折叠
//         collapseMenu(state) {
//             state.isCollapse = !state.isCollapse
//         }
//     },
//     getters: {
//         bigSum(state) {
//             return state.sum * 10
//         }
//     }
// }