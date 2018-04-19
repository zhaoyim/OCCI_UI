<template>
  <div class="login">
    <el-container>
      <el-header>
        <el-row type="flex" justify="end">
          <el-col :span="4">
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
                <el-input type="input" v-model="logindata.username" :placeholder="$t('logins.USERNAME')"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" v-model="logindata.password" :placeholder="$t('logins.PASSWORD')"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="login-button">{{ $t('logins.LOGIN') }}</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      logindata: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  .login-logo {
    margin: {
      top: 60px;
      bottom: 10px;
    }
  };
  .login-button {
    width: 100%;
  }
}

</style>
