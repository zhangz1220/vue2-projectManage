<template>
  <div>
    <header>
      <div class="l-content">
        <i class="el-icon-s-fold" @click="collapseMenu" style="color: #02b9a8;font-size: 24px;"></i>
        <i class="el-icon-menu" style="margin: 0 10px 0 20px;color: #909399;font-size: 24px;"></i>
        <h4 style="color: #6b6b6b;">首页</h4>
      </div>
      <div class="r-content">
        <img :src="userImg" class="user">
        <el-dropdown>
          <span class="el-dropdown-link">
            admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>
<script>

import { Logout } from '@/api/login';
export default ({
  data() {
    return {
      userImg: require('@/assets/img/user.jpg')
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('tab/collapseMenu')
    },
    //退出
    logout() {
      Logout().then(res => {
        this.$router.push('/')
      }).catch(err => {
        console.log('err==', err)
      })
    },
  },
})
</script>
<style scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;
}

.l-content .el-button {
  margin-right: 20px;
}

.r-content {
  display: flex;
  align-items: center;
}

.r-content .user {
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

/deep/ .el-dropdown {
  font-size: 16px;
  font-weight: bold;
}
</style>