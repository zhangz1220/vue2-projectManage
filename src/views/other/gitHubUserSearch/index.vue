<template>
  <div style="height: 100%;background: #fff;padding: 20px;">
		<Search></Search>
    <el-divider></el-divider>
    <List></List>
  </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
export default {
  name: 'App',
  mounted() {
    
  },
  components: {
    Search,List
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
</style>