<template>
    <div>
      <div class="content">
        <div class="content-login">
          <div class="title">用户登录</div>
          <el-form  ref="form" :model="form" label-width="80px">
            <el-form-item label="">
              <el-input v-model="form.username" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="form.passWord" type="password" placeholder="密码"></el-input>
            </el-form-item>
          </el-form>
          <div>
            <el-button class="button-login" type="primary" @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// 导入nanoid库
import { nanoid } from "nanoid";
import {mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      form: {
        username: '',
        passWord: '',
        valid: true,
        // userId: nanoid(), //随机生成 nanoid
      }
    }
  },
  methods:{
    login() {
      console.log(this.form)
      // if(this.form.username ==='zz'){
        //获取vuex 数据
        //调用mutation的方法 修改 store数据
        this.$store.commit('user/changeUserinfo',this.form)
        this.$router.push('/home/home')
      // }else{
      //   this.$message.error('账户不正确！');
      // }
      
    },
    // ...mapMutations({nanoid: state => state.tab.nanoid})
  }
}
</script>
<style scoped>
.content{
  padding-top: 60px;
  height:100vh;
  background-image: url(../../assets/login/login_bg.jpg);
  background-size: 100%;
}
.content-login{
  margin-top: 5%;
  margin-left: auto;
  padding: 30px;
  margin-right: 20%;
  width: 300px;
  height: 300px;
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 10px 10px 5px #423a37;
}
.title{
  height: 50px;
  line-height: 50px;
  /* text-align: left; */
  color: #914efb;
  font-weight: bold;
}
::v-deep .el-form-item__content{
  margin-left: 0 !important;
}
::v-deep .el-input__inner{
  border: 2px solid #f5f0f0;
}
.button-login{
  width: 100%;
  margin-top: 20px;
}
</style>