<template>
  <div class="mainpage">
    <el-menu :default-active="activeidx" mode="horizontal" background-color="#303643" text-color="#FFFFFF">
      <div class="menu-title"><strong>{{ $t('menu.title') }}</strong></div>
      <div class="menu-user">{{ gettersUsername }}</div>
      <div class="menu-help"><i class="el-icon-question"></i>{{ $t('menu.help') }}</div>
      <el-menu-item index="5">{{ $t('menu.optimize') }}</el-menu-item>
      <el-menu-item index="4">{{ $t('menu.log') }}</el-menu-item>
      <el-menu-item index="3">{{ $t('menu.tenant') }}</el-menu-item>
      <el-menu-item index="2"><router-link to="/main/cluster">{{ $t('menu.cluster') }}</router-link></el-menu-item>
      <el-menu-item index="1"><router-link to="/main/dashboard">{{ $t('menu.dashboard') }}</router-link></el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      activeidx: '1'
    }
  },
  computed: {
    ...mapGetters(['gettersUsername'])
  }
}
</script>

<style lang="scss" scoped>
.mainpage {
  width: 100%;
  height: 100%;
  .el-menu {
    .menu-title {
      float: left;
      margin: {
        top: 12px;
        left: 35px;
      }
      font: {
        size: 1.6em;
      }
      color: #ffffff;
    }
    .menu-help {
      float: right;
      margin: {
        top: 18px;
        right: 20px;
        left: 70px;
      }
      color: #ffffff;
    }
    .menu-user {
      float: right;
      margin: {
        top: 18px;
        right:20px;
        left: 20px;
      }
      color:#ffffff
    }
    .el-menu-item {
      float: right;
      a {
        text-decoration: none;
      }
      &.is-active {
        color: #ffffff;
        background-color: #242A39!important;
        box-shadow: inset 0 0 2px 0 #1C212E;
      }
    }
  }
}

</style>
