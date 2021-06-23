<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        <!-- <img src="../../assets/images/logo.png" height="100" alt=""> -->
        <p class="login-title">仿真培训管理系统</p>
        <p class="login-st">Simulation training management system</p>
      </div>
      <el-input
          placeholder="请输入用户名"
          suffix-icon="fa fa-user"
          v-model="userNmae"
          style="margin-bottom: 18px"
      >
      </el-input>

      <el-input
          placeholder="请输入密码"
          suffix-icon="fa fa-keyboard-o"
          v-model="password"
          type="password"
          style="margin-bottom: 18px"
          @keyup.native.enter="login"
      >
      </el-input>

      <el-button
          type="primary" :loading="loginLoading"
          style="width: 100%;margin-bottom: 18px"
          @click.native="login"
      >登录
      </el-button>
      <!-- <div>
        <el-checkbox v-model="Remenber"> Remenber</el-checkbox>
        <a href="javascript:;" style="float: right;color: #3C8DBC;font-size: 14px">Register</a>
      </div> -->

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userNmae: '',
        password: '',
        Remenber: true,
        loginLoading: false
      }
    },
    methods: {
      login() {
        let APP = this;
        APP.loginLoading = true;
        setTimeout(() => {
          sessionStorage.setItem('tokenKey', '123456789');
          APP.$notify({
            title: '登录成功',
            message: '欢迎进入仿真培训管理系统',
            type: 'success'
          });
          APP.loginLoading = false;
          this.$router.push({path: '/'});
        }, 1000);
      }
    }
  }
</script>

<style lang="less">
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #e4e5e6;
  .login-form{
    width: 375px;
    padding: 30px;
    background-color: white;
    text-align: left;
    border-radius: 4px;
    position: relative;
    margin-left: 0;
    margin-right: 0;
    zoom: 1;
    display: block;
    .login-header{
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
.login-title{
  font-size: 18px;
  padding-bottom: 20px;
  color: rgba(17, 101, 178, 1);
  font-weight: bold;
}
.login-st{
  font-size: 15px;
  padding-bottom: 30px;
  color: rgba(17, 101, 178, 1);
}
</style>