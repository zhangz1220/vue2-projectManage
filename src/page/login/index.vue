<template>
  <div>
    <div class="content">
      <div class="content-login">
        <div class="title">用户登录</div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="">
            <el-input v-model="form.username" placeholder="账号" @keyup.enter.native="login"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.password" type="password" :prefix-icon="Lock" placeholder="密码"
              @keyup.enter.native="login" show-password></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button class="button-login" type="primary" :loading="loading" @click.native.prevent="login">{{ loading ?
            '登录中' : '登录' }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入nanoid库
import { nanoid } from "nanoid";
import { mapMutations } from 'vuex'
import { Login } from '@/api/login';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: '',
        valid: true,
        // userId: nanoid(), //随机生成 nanoid
      }
    }
  },
  methods: {
    async login() {
      console.log(this.form)
      this.loading = true;
      Login({ username: this.form.username, password: this.form.password }).then(res => {
        console.log('res==', res)
        if (res.data) {
          this.loading = false;
          this.$message.success('登录成功');
          //获取vuex 数据
          //调用mutation的方法 修改 store数据
          this.$store.commit('user/changeUserinfo', this.form)
          this.$router.push('/layout')
          // this.$router.push('/home/home')
        } else {
          this.loading = false;
          this.$message.error(res.message);
        }
      }).catch(err => {
        console.log('err==', err)
        this.loading = false;
        this.$message.error('登录失败');
      })

    },
    // ...mapMutations({nanoid: state => state.tab.nanoid})
  }
}
</script>
<style scoped>
.content {
  padding-top: 60px;
  height: 100vh;
  background-image: url(../../assets/login/bg_login.jpg);
  background-size: 100% 100%;
}

.content-login {
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

.title {
  height: 50px;
  line-height: 50px;
  /* text-align: left; */
  color: #914efb;
  font-weight: bold;
}

::v-deep .el-form-item__content {
  margin-left: 0 !important;
}

::v-deep .el-input__inner {
  border: 2px solid #f5f0f0;
}

.button-login {
  width: 100%;
  margin-top: 20px;
}
</style>