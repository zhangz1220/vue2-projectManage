// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
// import home from '@/page/home/index.vue';

// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
//创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history', //工作模式 默认不写是 hash -->路径里有/#/ history
    routes: [
        //登录页
        {
            name: 'login',
            path: '/',
            meta: {
                isAuth: false,
                title: '登录'
            },
            component: () =>
                import('@/page/login/index.vue')
        },
        //首页
        {
            path: '/home',
            component: () =>
                import('@/page/home/index.vue'),
            redirect: '/home/home',
            children: [{
                path: 'home',
                name: 'home',
                meta: {
                    title: '首页'
                },
                //独享路由守卫 只有前置，没有后置
                beforeEnter: (to, from, next) => {
                    //对当前路由做限制
                    next()
                },
                component: () =>
                    import('@/views/home/index.vue'),
            },
            //其他页
            {
                name: 'gitHubUserSearch',
                path: 'other/gitHubUserSearch',
                meta: {
                    title: 'gitHub用户搜索'
                },
                component: () =>
                    import('@/views/other/gitHubUserSearch/index.vue'),
            },
            {
                name: 'vuexTest',
                path: 'other/vuexTest',
                meta: {
                    title: ''
                },
                component: () =>
                    import('@/views/other/vuexTest/index.vue'),
                props: true, //true-该路由组件收到的params参数以props的形式传给当前组件
            },
            {
                name: 'demo',
                path: 'other/demo',
                meta: {
                    title: ''
                },
                component: () =>
                    import('@/views/other/demo/index.vue'),
                props: true, //true-该路由组件收到的params参数以props的形式传给当前组件
            }

            ]
        },

    ]
})

//全局前置路由守卫---前置：初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
        console.log('全局前置路由守卫 beforeEach.......')
        console.log('to.......', to)
        console.log('from.......', from)
        next()
    }) */

//全局后置路由守卫---后置：初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    //路由切换后 修改页签 title
    document.title = to.meta.title || '系统管理' //meta里没有配title，则默认显示 '系统管理'
})

export default router