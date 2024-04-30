<template>
  <div>
    <div class="logo">
      <img src="@/assets/img/cxy.png" alt="">
      <div class="title">管理后台系统</div>
    </div>
    <!-- 菜单 -->
    <el-menu active-class="custom-menu-active-bg" :collapse="isCollapse" text-color="#fff" background-color="#20222a"
      class="el-menu-vertical-demo" :default-active="$route.path" @open="handleOpen" @close="handleClose"
      v-for="(item, index) in menuList" :key="item.path">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
          <!-- <!== <el-icon>
            <!== 图标 ==>
            <!== <Edit /> ==>
            <!== <component :is="item.meta.icon"></component> ==>
            <i class="el-icon-edit" color="red"></i>
          </el-icon> ==> -->
          <!-- <i class="el-icon-s-fold" style="color: #02b9a8;font-size: 24px;"></i> -->
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>

      <!-- 有子路由但是只有一个 -->
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item v-if="!item.meta.hidden" :index="item.children[0].path" @click="goRoute">
          <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>
      </template>

      <!-- 有多个子路由 -->
      <template v-if="item.children && item.children.length > 1">
        <!-- 折叠菜单 -->
        <el-submenu v-if="!item.meta.hidden" :index="index">
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group v-for="(item2) in item.children" :key="item2.path">
            <el-menu-item v-if="!item2.meta.hidden" :index="item2.path" @click="goRoute">
              {{ item2.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // isCollapse: false, //菜单是否折叠
      menuList: [
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
      ],
    };
  },
  methods: {
    /*  */
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击选择一级菜单
    chooseMenu(val) {
      let path = '/home' + val.path
      console.log('path', path)
      this.$router.push(path)
    },
    //点击选择其他里的 二级菜单
    chooseOtherMenu(val) {
      let path = '/home/other' + val.path
      console.log('path===', path)
      this.$router.push(path)
    },

    goRoute(vc) {
      let path = vc.index
      console.log(path)


      this.$router.push(path)
    }
  },
  computed: {
    //菜单是否折叠
    /* isCollapse() {
      return this.$store.state.tab.isCollapse;
    }, */
    ...mapState({ isCollapse: state => state.tab.isCollapse }),
  },
};
</script>
<style scoped lang="scss">
.el-menu-item {
  text-align: left;
}

::v-deep .el-submenu__title {
  text-align: left !important;
}

.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px 15px;
  color: #fff;

  img {
    width: 30px;
    height: 30px;
    border-radius: 40px;
  }

  .title {
    margin-left: 10px;
    font-size: 20px;
  }
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #02b9a8 !important;
}
</style>