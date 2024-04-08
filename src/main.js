import Vue from 'vue'
import App from './App.vue'

//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
Vue.use(VueRouter);

//引入 Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
    //引入 store
import store from './store';

//Axios
// import Axios from 'axios'
import Axios from '@/api/axios'
// axios需要使用prototype将axios挂载到原型上 
Vue.prototype.http = Axios //以后使用this.http

//引入 elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')