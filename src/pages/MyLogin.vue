<template>
  <div>
    <form v-if="!isLogin">
      用户名：<input type="text" v-model="userInfo.name"><br>
      密码：<input type="password" v-model="userInfo.pass"><br>
      <button @click="login">登录</button>
    </form>
    <button v-if="isLogin" @click="logout">退出登录</button>
  </div>
</template>

<script>
  export default {
    name: 'MyLogin',
    data(){
      return {
        userInfo: {
          name: '',
          pass: ''
        },
        isLogin: localStorage.getItem('token')
      }
    },
    methods: {
      login(){
        localStorage.setItem('token', JSON.stringify(this.userInfo))
        this.isLogin = true
      },
      logout(){
        localStorage.removeItem('token')
        this.isLogin = false
      }
    },
    // beforeRouteEnter(to, from, next){
    //   console.log('beforeRouterEnter-from', from);
    //   console.log('beforeRouterEnter-to', to);
    //   console.log(this);
    //   next()
    // }
    // beforeRouteLeave(to, from, next){
    //   if(this.userInfo && this.userInfo.name != '' || this.userInfo.pass != '') {
    //     const confirm = window.confirm('你输入的内容尚未提交，确认离开吗？')
    //     if(confirm) {
    //       return next()
    //     } else {
    //       return next(false)
    //     }
    //   }
    //   next()
    // }
  }
</script>