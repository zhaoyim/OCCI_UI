<template>
  <div class="dashboard">
    <h3>{{ $t('dashboard.title') }}</h3>
    <el-row :gutter="30">
      <el-col :span="6">
        <el-card shadow="hover" class="dashboard-info" v-loading="load_hdfs" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-row>
            <el-col :span="8">
              <div class="panel-badge panel-badge-hdfs"><font-awesome-icon :icon="['fas', 'database']" class="badge-svg"></font-awesome-icon></div>
            </el-col>
            <el-col :span="16">
              <h5>{{ $t('dashboard.hdfsspace') }}</h5>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="dashboard-info" v-loading="load_mapreduce" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-row>
            <el-col :span="8">
              <div class="panel-badge panel-badge-mapreduce"><font-awesome-icon :icon="['far', 'thumbs-up']" class="badge-svg"></font-awesome-icon></div>
            </el-col>
            <el-col :span="16">
              <h5>{{ $t('dashboard.mapreducejobs') }}</h5>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="dashboard-info" v-loading="load_spark" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-row>
            <el-col :span="8">
              <div class="panel-badge panel-badge-spark"><font-awesome-icon :icon="['fas', 'hourglass-half']" class="badge-svg"></font-awesome-icon></div>
            </el-col>
            <el-col :span="16">
              <h5>{{ $t('dashboard.sparkjobs') }}</h5>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="dashboard-info" v-loading="load_cluster" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-row>
            <el-col :span="8">
              <div class="panel-badge panel-badge-cluster"><font-awesome-icon :icon="['fas', 'inbox']" class="badge-svg"></font-awesome-icon></div>
            </el-col>
            <el-col :span="16">
              <h5>{{ $t('dashboard.clusterresource') }}</h5>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { dashboardHDFS, dashboardMapreduce, dashboardSpark, dashboardTenant } from '../services/mock'
export default {
  name: 'Dashboard',
  data: function () {
    return {
      load_hdfs: true,
      load_mapreduce: true,
      load_spark: true,
      load_cluster: true
    }
  },
  mounted () {
    dashboardHDFS().then((data) => {
      console.log(data)
      this.load_hdfs = false
    }).catch((err) => {
      console.log(err)
      this.load_hdfs = false
    })
    dashboardMapreduce().then((data) => {
      console.log(data)
      this.load_mapreduce = false
    }).catch((err) => {
      console.log(err)
      this.load_mapreduce = false
    })
    dashboardSpark().then((data) => {
      console.log(data)
      this.load_spark = false
    }).catch((err) => {
      console.log(err)
      this.load_spark = false
    })
    dashboardTenant().then((data) => {
      this.load_cluster = false
      console.log(data)
    }).catch((err) => {
      this.load_cluster = false
      console.log(err)
    })
  },
  computed: { ...mapGetters(['gettersUsername']) }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    margin: {
      left: 40px;
      right: 40px;
      top: 10px;
      bottom: 50px;
    }
    h3 {
      color: dimgray;
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .dashboard-info {
      h5 {
        color: gray;
        margin: {
          top: 5px;
          left: 0;
          right: 0;
          bottom: 10px;
        }
      }
      .panel-badge {
        width: 96px;
        height: 96px;
        border-radius: 48px;
        text-align: center;
        .badge-svg {
          font-size: 60px;
          color: white;
          margin-top: 16px;
        }
      }
      .panel-badge-hdfs {
        background-color: deepskyblue;
      }
      .panel-badge-mapreduce {
        background-color: springgreen;
      }
      .panel-badge-spark {
        background-color: gold;
      }
      .panel-badge-cluster {
        background-color: lightcoral;
      }
    }
  }
</style>
