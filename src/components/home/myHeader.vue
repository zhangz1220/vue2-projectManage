<template>
	<div>
    <header>
      <div class="l-content">
        <el-button plain icon="el-icon-menu" size='mini' @click="collapseMenu"></el-button>
        <h5 style="color: #fff;">首页</h5>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img :src="userImg" class="user">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
	</div>
</template>
<script>

export default({
  data(){
    return{
      userImg: require('@/assets/user.jpg')
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('tab/collapseMenu')
    }
  },
})
</script>
<style scoped>
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content{
  display: flex;
  align-items: center;
}
.l-content .el-button{
  margin-right: 20px;
}
.r-content .user{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>