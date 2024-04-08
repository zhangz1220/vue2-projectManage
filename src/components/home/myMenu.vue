<template>
  <div>
    <el-menu default-active="/home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <h3 v-show="!isCollapse" style="color: #fff">管理系统</h3>
      <h3 v-show="isCollapse" style="color: #fff">系统</h3>
      <!-- 一级菜单 -->
      <el-menu-item :index="item.path" v-for="(item) in noChildren" :key="item.path" @click="chooseMenu(item)">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!-- 二级菜单 -->
      <el-submenu :index="item.label" v-for="(item) in hasChildren" :key="item.label">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path" v-for="(subItem) in item.children" :key="subItem.path"
            @click="chooseOtherMenu(subItem)">
            <i :class="'el-icon-' + subItem.icon"></i>
            <span slot="title">{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // isCollapse: false, //菜单是否折叠
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/bbb",
          name: "home",
          label: "商品管理",
          icon: "video-play",
          url: "Home/Home",
        },
        {
          path: "/ccc",
          name: "home",
          label: "用户管理",
          icon: "user",
          url: "Home/Home",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            // {
            //   path: "/gitHubUserSearch",
            //   name: "gitHubUserSearch",
            //   label: "gitHub用户搜索",
            //   icon: "setting",
            //   url: "Other/PageOne",
            // },
            // {
            //   path: "/vuexTest",
            //   name: "vuex加减运算",
            //   label: "vuex加减运算",
            //   icon: "setting",
            //   url: "Other/PageTwo",
            // },
            {
              path: "/demo",
              name: "demo",
              label: "demo",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
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
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    //菜单是否折叠
    /* isCollapse() {
      return this.$store.state.tab.isCollapse;
    }, */
    ...mapState({ isCollapse: state => state.tab.isCollapse }),
  },
};
</script>
<style scoped>
.el-menu {
  height: 100vh;
}

.el-menu-item {
  text-align: left;
}

::v-deep .el-submenu__title {
  text-align: left !important;
}

.aside-box {
  background-color: rgb(84, 92, 100);
}

.aside-box h5 {
  color: #67c23a;
}
</style>