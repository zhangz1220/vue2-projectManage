<template>
    <div style="text-align: left;">
        <el-input v-model="name" placeholder="请输入内容" clearable style="width: 200px;margin-right: 20px;" />
        <el-button type="primary" @click='search'>搜索</el-button>
        <span class="des-title" title="全局数据总线 兄弟组件之间传值,请求过程中显示加载中">查看描述</span>
    </div>
</template>
<script>
export default {
    name: 'Search',
    data() {
        return {
            name: '',
            userList:[], //用户列表
        }
    },
    methods:{
        search() {
            if(this.name == ''){
                let obj = {
                    isFirst: true,
                    isLoading: false,
                    errMsg: '',
                    users: [],
                }
                this.$bus.$emit('updateListData',obj) //显示 欢迎
                return
            }
            //请求前更新list数据
            let obj = {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: [],
            }
            this.$bus.$emit('updateListData',obj)
            //github 提供的接口 查询用户列表
            this.http.get(`https://api.github.com/search/users?q=${this.name}`).then(
                response =>{
                    console.log('请求成功')
                    this.userList = response.data.items
                    //请求成功更新list数据
                    let prams = {
                        isFirst: false,
                        isLoading: false,
                        errMsg: '',
                        users: this.userList,
                    }
                    this.$bus.$emit('updateListData',prams)
                },
                error =>{
                    console.log('请求失败')
                    //请求失败更新list数据
                    console.log(error.message)
                    let prams = {
                        isFirst: false,
                        isLoading: false,
                        errMsg: error.message,
                        users: [],
                    }
                    this.$bus.$emit('updateListData',prams)
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
/* 描述 */
.des-title{
    margin-left: 20px;
    color: red;
}
</style>