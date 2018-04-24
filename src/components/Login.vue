<template>
  <div class="login">
    <el-container
      v-loading="login_loading"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgb(0,0,0,0.5)">
      <el-header>
        <el-row type="flex" justify="end">
          <el-col :span="3">
            <lang-ctrl></lang-ctrl>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <img src="../assets/logo.png" class="login-logo">
            <h1>{{ $t('OCCI') }}</h1>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="12">
            <el-form ref="form" :model="logindata" label-width="80px">
              <el-form-item>
                <el-input type="input" v-model="logindata.username" :placeholder="$t('logins.USERNAME')" @keyup.enter.native="login" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" v-model="logindata.password" :placeholder="$t('logins.PASSWORD')" @keyup.enter.native="login" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="login-button" @click="login()">{{ $t('logins.LOGIN') }}</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row class="login-footer">
          <el-col :span="6" :offset="1">
            <strong>&copy;Asiainfo OCCI, May 2018</strong>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      logindata: {
        username: '',
        password: ''
      },
      defaultInfos: [
        {username: 'admin', password: 'admin'},
        {username: 'zhi', password: 'haha'}
      ],
      login_loading: false,
      login_error: false
    }
  },
  methods: {
    ...mapActions(['logUsername']),
    login: function () {
      if (this.logindata.username.length === 0 || this.logindata.password.length === 0) {
        this.$message({message: this.$t('logins.MISSING_INFO'), duration: 3000})
      } else if (!this.login_loading) {
        this.login_loading = true
        let flag = false
        for (let info of this.defaultInfos) {
          if (this.logindata.username === info.username && this.logindata.password === info.password) {
            flag = true
          }
        }
        setTimeout(() => {
          if (flag) {
            this.$message({message: this.$t('logins.SUCCESS_INFO'), type: 'success', duration: 2000})
            this.logUsername(this.logindata)
            this.$router.push('/main/dashboard')
          } else {
            this.$message({message: this.$t('logins.ERROR_INFO'), type: 'error', duration: 3000})
            this.login_error = true
            setTimeout(() => { this.login_error = false }, 2700)
          }
          this.login_loading = false
          this.logindata = {username: '', password: ''}
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
  }
  .login-logo {
    margin: {
      top: 60px;
      left: 10px;
      bottom: 10px;
    }
  };
  .login-button {
    width: 100%;
  }
  .el-footer {
    background: {
      color: #303643;
    }
  }
  .login-footer {
    margin-top: 20px;
    text-align: left;
    color: #ffffff;
  }
}

</style>
