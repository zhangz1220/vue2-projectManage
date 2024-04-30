<template>
  <div>
    <el-container>
      <el-aside width="200px" style="height:100vh;background-color: #20222a;" :class="{ hideMenu: isCollapse }">
        <my-menu></my-menu>
      </el-aside>
      <el-container>
        <el-header>
          <my-header></my-header>
        </el-header>
        <el-main style="background: #e4e7ea;height: calc(100vh - 60px);">
          <my-content></my-content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myMenu from '@/components/home/myMenu.vue'
import myHeader from '@/components/home/myHeader.vue'
import myContent from '@/components/home/myContent.vue'
export default {
  name: 'App',
  mounted() {

  },
  components: {
    myMenu, myHeader, myContent
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    //菜单是否折叠
    isCollapse() { //isCollapse 存储在vuex
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>
<style scoped>
.el-header {
  background: #ffffff;
  border-bottom: 1px solid #dfdfdf;
}

.hideMenu {
  width: auto !important;
}

.el-main {
  text-align: justify;
  padding: 10px;
}
</style>