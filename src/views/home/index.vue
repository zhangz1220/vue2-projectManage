<template>
  <div style="height: 100%;">
    <el-row :gutter="20">
      <el-col :span="24" style="margin-bottom: 20px;text-align: left;">
        <div class="top">
          <el-button type="primary" size='mini'>首页</el-button>
          <!-- <span>和：{{bigSum}}；姓：{{firstName}}</span> -->
          <span style="color: #66b1ff;">{{ homeTilet }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="padding:0;margin:0;">
      <el-col :span="7" style="padding: 0;height: 100%;">
        <div class="home-left">
          <div class="user">
            <div class="userup">
              <img :src="userImg" class="image">
              <div class="user-info">
                <div class="name">{{ username }}</div>
                <div class="access">{{ authority }}</div>
              </div>
            </div>
            <div class="userdown">
              <div>
                <span>上次登录时间：</span>
                <span style="margin-left: 20px;">2019-12-20</span>
              </div>
              <div style="margin-top:5px;">
                <span>上次登录地点：</span>
                <span style="margin-left: 20px;">合肥</span>
              </div>
            </div>
          </div>
          <div class="kecheng">
            <div class="head">
              <div>课程</div>
              <div>今日购买</div>
              <div>本月购买</div>
              <div>总购买</div>
            </div>
            <div class="content-item" v-for="(item) in kechengList" :key="item.id">
              <div>{{ item.name }}</div>
              <div>{{ item.jrgm }}</div>
              <div>{{ item.bygm }}</div>
              <div>{{ item.zgm }}</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="17" style="padding-left: 20px;">
        <div class="grid-content bg-purple">
          <div class="home-right">
            <div class="statistacs-box">
              <div class="box-item">
                <img src="@/assets/img/01.jpg" class="image">
                <div class="item-right">
                  <p>￥ 1234</p>
                  <span>今日支付订单</span>
                </div>
              </div>
              <div class="box-item">
                <img src="@/assets/img/02.jpg" class="image">
                <div class="item-right">
                  <p>￥ 210</p>
                  <span>今日收藏订单</span>
                </div>
              </div>
              <div class="box-item">
                <img src="@/assets/img/03.jpg" class="image">
                <div class="item-right">
                  <p>￥ 1234</p>
                  <span>今日未支付订单</span>
                </div>
              </div>
              <div class="box-item">
                <img src="@/assets/img/01.jpg" class="image">
                <div class="item-right">
                  <p>￥ 1234</p>
                  <span>今日支付订单</span>
                </div>
              </div>
              <div class="box-item">
                <img src="@/assets/img/02.jpg" class="image">
                <div class="item-right">
                  <p>￥ 210</p>
                  <span>今日收藏订单</span>
                </div>
              </div>
              <div class="box-item">
                <img src="@/assets/img/03.jpg" class="image">
                <div class="item-right">
                  <p>￥ 1234</p>
                  <span>今日未支付订单</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style="width: 100px;height: 100px;background: red;color: #fff;line-height: 100px;
          text-align: center;font-size: 29px;font-family: cursive;
    font-weight: bold;">
            华安
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
//引入
import website from '@/config/website';
// import env from '@/config/dev.env.js';
export default {
  name: 'App',
  mounted() {

    //http://localhost:8081/api/userinfo
    this.http.get(website.url + (process.env.NODE_ENV === 'development' ? '/apiManage' : '') + '/userinfo')
      // this.http.get(website.url+'/apiManage'+'/userinfo')
      .then(
        response => {
          console.log('userinfo请求成功')
          console.log(response.data)
          console.log('$store.getters ===', this.$store.getters)
        },
        response => {
          console.log('userinfo请求失败')
          console.log(response.message)
        }
      )
    //获取鸡汤文本
    this.$store.dispatch('tab/getTitle')
  },
  components: {

  },
  data() {
    return {
      userImg: require('@/assets/user.jpg'),
      //课程列表
      kechengList: [
        { id: '01', name: 'oppo', jrgm: '124', bygm: '456', zgm: '10000' },
        { id: '02', name: 'vivo', jrgm: '124', bygm: '456', zgm: '10000' },
        { id: '03', name: 'HUAWEI', jrgm: '124', bygm: '456', zgm: '10000' },
        { id: '04', name: 'oppo', jrgm: '124', bygm: '456', zgm: '10000' },
        { id: '05', name: 'oppo', jrgm: '124', bygm: '456', zgm: '10000' },
        { id: '06', name: 'oppo', jrgm: '124', bygm: '456', zgm: '10000' },
        { id: '07', name: 'oppo', jrgm: '124', bygm: '456', zgm: '10000' },
        { id: '08', name: 'oppo', jrgm: '124', bygm: '456', zgm: '10000' },
      ]
    }
  },
  methods: {

  },
  computed: {
    ...mapState({ homeTilet: state => state.tab.homeTilet }),
    // 借助 mapState 生成计算属性，从 state 中读取数据（对象写法） 还有数组写法: ...mapState(['username'])
    ...mapState({
      username: state => state.user.userinfo.username, //username 在count.js 的 state 里
      authority: state => state.user.userinfo.authority //authority 在count.js 的 state 里
    }),

    // 借助 mapGetters 生成计算属性，从 getters 中读取数据（对象写法）
    ...mapGetters({ bigSum: ['count/bigSum'] }), //bigSum 在count.js 的 getters 里

    // firstName(){
    //   return this.$store.getters['user/firstName'] // return this.$store.getters['firstName']
    // }
    // ...mapGetters({firstName:['firstName']}), //firstName 在user.js 的 getters 里,当 user.js 里没有配置 namespaced: true 时的写法
    ...mapGetters({ firstName: ['user/firstName'] }) //当 user.js 里配置了 namespaced: true 时的写法
  },

  /*  //通过路由规则，进入该组件时被调用
   beforeRouteEnter (to, from, next) {
     // ...
   },
   //通过路由规则，离开该组件时被调用
   beforeRouteLeave (to, from, next) {
     // ...
   } */
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/home.scss';
</style>