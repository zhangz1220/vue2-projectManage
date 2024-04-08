<template>
  <div style="height: 100%;background: #fff;padding: 20px;">
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和乘10为：{{ bigSum }}</h1>
    <select v-model.number="mount" style="width:50px;">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="jia(mount)"> + </button>
    <button @click="jian(mount)"> - </button>
    <button @click="jishujia(mount)"> 奇数加 </button>
    <button @click="yanshijia(mount)"> 延时加 </button>
  </div>
</template>

<script>
import {mapState,mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'App',
  mounted() {
    
  },
  components: {
  },
  data(){
    return{
      mount: 1
    }
  },
  methods:{
    //直接加减 调mutation
    jia(){
      this.$store.commit('count/JIA',this.mount)
    },
    // ...mapMutations({jia: 'count/JIA'}), //借助 mapMutations 生成对应的方法，方法中调用commit联系mutations（对象写法）

    // jian(){
    //   this.$store.commit('count/JIAN',this.mount)
    // },
    ...mapMutations({jian: 'count/JIAN'}), //借助 mapMutations 生成对应的方法，方法中调用commit联系mutations（对象写法）

    /* ############################################## */

    //奇数加/延时加 调action里的 jiaOdd判断再加
    jishujia() {
      // if(this.$store.state.count.sum % 2){
        this.$store.dispatch('count/jiaOdd',this.mount)
      // }
    },
    // ...mapActions({jishujia: 'count/jiaOdd'}), //借助 mapActions 生成对应的方法，方法中调用 dispatch 联系mutations（对象写法）
    
    // yanshijia() {
    //   setTimeout(() =>{
    //     this.$store.dispatch('count/jiaWaite',this.mount)
    //   },1000)
    // },
    ...mapActions({yanshijia: 'count/jiaWaite'}), //借助 mapActions 生成对应的方法，方法中调用 dispatch 联系mutations（对象写法）
  },
  computed:{
    // 借助 mapState 生成计算属性，从 state 中读取数据（对象写法） 还有数组写法: ...mapState(['username'])
    ...mapState({sum:state => state.count.sum}), //sum 在count.js 的 state 里
    // 借助 mapGetters 生成计算属性，从 getters 中读取数据（对象写法）
    ...mapGetters({bigSum: ['count/bigSum']}) //bigSum 在count.js 的 getters 里
  }
}
</script>
<style lang="scss" scoped>
</style>