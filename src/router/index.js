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
            path: '/', //路由路径
            component: () =>
                import('@/page/login/index.vue'), //路由组件
            name: 'login', //路由名称
            meta: {
                title: '登录页',
                hidden: true, //菜单中是否隐藏
                icon: ''
            }
        },
        {
            path: '/layout',
            component: () =>
                import('@/page/layout/index.vue'),
            name: 'layout',
            meta: {
                title: '',
                hidden: false, //菜单中是否隐藏
                icon: ''
            },
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    component: () => import('@/views/home/index.vue'),
                    meta: {
                        title: '首页',
                        hidden: false, //菜单中是否隐藏
                        icon: 'el-icon-s-marketing'
                    }
                }
            ]
        },
        {
            path: '/chart',
            component: () =>
                import('@/page/layout/index.vue'),
            name: 'Chart',
            meta: {
                title: '图表',
                hidden: false, //菜单中是否隐藏
                icon: 'Platform'
            },
            redirect: '/chart/pie',
            children: [
                {
                    path: '/chart/pie',
                    component: () => import('@/views/chart/pie/index.vue'),
                    name: 'Pie',
                    meta: {
                        title: '饼状图',
                        hidden: false, //菜单中是否隐藏
                        icon: 'User'
                    }
                },
                {
                    path: '/chart/line',
                    component: () => import('@/views/chart/line/index.vue'),
                    name: 'Line',
                    meta: {
                        title: '线图',
                        hidden: false, //菜单中是否隐藏
                        icon: 'User'
                    }
                },
            ]
        },
        {
            path: '/acl',
            component: () =>
                import('@/page/layout/index.vue'),
            name: 'Acl',
            meta: {
                title: '权限管理',
                hidden: false, //菜单中是否隐藏
                icon: 'Lock'
            },
            redirect: '/acl/user',
            children: [
                {
                    path: '/acl/user',
                    component: () => import('@/views/acl/user/index.vue'),
                    name: 'User',
                    meta: {
                        title: '用户管理',
                        hidden: false, //菜单中是否隐藏
                        icon: 'User'
                    }
                },
                {
                    path: '/acl/role',
                    component: () => import('@/views/acl/role/index.vue'),
                    name: 'Role',
                    meta: {
                        title: '角色管理',
                        hidden: false, //菜单中是否隐藏
                        icon: 'User'
                    }
                },
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