<template>
    <div class="con-box">
        <!-- 初次展示 -->
        <div  v-show="info.isFirst">欢迎</div>
        <!-- 展示用户列表 -->
        <div v-show="info.users.length" class="box-item" v-for="(item,index) in info.users" :key='index'>
            <a :href="item.html_url" target="_blank">
                <img :src="item.avatar_url" alt="">
            </a>
            <div>{{item.login}}</div>
        </div>
        <!-- 加载中 -->
        <div  v-show="info.isLoading">加载中......</div>
        <!-- 加载中 -->
        <div  v-show="!info.isFirst &&!info.isLoading && info.users.length == 0">暂无数据</div>
        <!-- 报错 -->
        <div  v-show="info.errMsg">{{info.errMsg}}</div>
    </div>
</template>
<script>
export default {
    name: 'List',
    mounted(){
        this.$bus.$on('updateListData',(dataObj)=>{
            console.log('我是List组件，收到数据：',dataObj)
            //返回数据的 avatar_url-用户头像地址  html_url-用户主页地址 login-用户名
            this.info = {...this.info,...dataObj}
        })
    },
    data(){
        return{
            info:{
                isFirst: true,
                isLoading: false,
                errMsg: '',
                users: [],
            }
            
            // url: 'https://api.github.com/search/users?q=xxx'
        }
    },
}
</script>
<style lang="scss" scoped>
    .con-box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        min-height: 67vh;
        .box-item{
            width: 32%;
            margin: 10px 0;
            padding: 20px 0;
            border: 2px solid #f1f0f0;
          img{
              width: 100px;
              height: 100px;
          }
        }
    }
</style>