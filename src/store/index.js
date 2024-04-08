import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//引入模块
import tab from './modules/tab'
import user from './modules/user'
import count from './modules/count'


//创建 store
const store = new Vuex.Store({
        modules: {
            tab,
            user,
            count
        }
    })
    //导出store
export default store;