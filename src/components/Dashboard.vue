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
              <strong>{{ hdfs.used }}/{{ hdfs.total }}</strong>
              <p><font class="panel-percentage" :class="hdfs_percentage_classes">{{ hdfs.percentage }}%</font>{{ $t('dashboard.usage') }}</p>
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
              <strong>{{ mapreduce.jobs }}</strong>
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
              <strong>{{ spark.jobs }}</strong>
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
              <strong>{{ tenant.tenant }}/{{ tenant.total }}</strong>
              <p><font class="panel-percentage" :class="tenant_percentage_classes">{{ tenant.percentage }}%</font>{{ $t('dashboard.satisfation') }}</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="16">
        <el-card shadow="hover" class="panel-with-title">
          <div slot="header" class="clearfix">
            <font class="panel-title">{{ $t('dashboard.CPUusage') }}</font>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="panel-with-title">
          <div slot="header" class="clearfix">
            <font class="panel-title">{{ $t('dashboard.Clustersatisfy') }}</font>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="16">
        <el-card shadow="hover" class="panel-with-title">
          <div slot="header" class="clearfix">
            <font class="panel-title">{{ $t('dashboard.Memoryusage') }}</font>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="panel-with-title">
          <div slot="header" class="clearfix">
            <font class="panel-title">{{ $t('dashboard.MRSparkjobtrends') }}</font>
          </div>
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
      load_cluster: true,
      hdfs: {
        used: 0,
        total: 0,
        percentage: 0
      },
      mapreduce: {
        jobs: 0
      },
      spark: {
        jobs: 0
      },
      tenant: {
        total: 0,
        tenant: 0,
        percentage: 0
      }
    }
  },
  mounted () {
    dashboardHDFS().then((response) => {
      let used = response.data.used
      let total = response.data.total
      this.hdfs.used = Math.round(used)
      this.hdfs.total = Math.round(total)
      this.hdfs.percentage = Math.round(used * 10000 / total) / 100
      this.load_hdfs = false
    }).catch((err) => {
      console.log(err)
      this.load_hdfs = false
    })
    dashboardMapreduce().then((response) => {
      this.mapreduce.jobs = Math.round(response.data.count)
      this.load_mapreduce = false
    }).catch((err) => {
      console.log(err)
      this.load_mapreduce = false
    })
    dashboardSpark().then((response) => {
      this.spark.jobs = Math.round(response.data.count)
      this.load_spark = false
    }).catch((err) => {
      console.log(err)
      this.load_spark = false
    })
    dashboardTenant().then((response) => {
      let tenant = response.data.tenant
      let total = response.data.total
      this.tenant.tenant = Math.round(tenant)
      this.tenant.total = Math.round(total)
      this.tenant.percentage = Math.round(tenant * 10000 / total) / 100
      this.load_cluster = false
    }).catch((err) => {
      this.load_cluster = false
      console.log(err)
    })
  },
  computed: {
    ...mapGetters(['gettersUsername']),
    hdfs_percentage_classes: function () {
      return {
        'panel-percentage-danger': this.hdfs.percentage >= 80,
        'panel-percentage-warning': this.hdfs.percentage >= 50 && this.hdfs.percentage < 80,
        'panel-percentage-success': this.hdfs.percentage < 50
      }
    },
    tenant_percentage_classes: function () {
      return {
        'panel-percentage-danger': this.tenant.percentage < 30,
        'panel-percentage-warning': this.tenant.percentage >= 30 && this.tenant.percentage < 60,
        'panel-percentage-success': this.tenant.percentage >= 60
      }
    }
  }
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
          bottom: 0;
        }
      }
      strong {
        font-size: 2.4em;
        padding: 0;
        margin: 0;
      }
      p {
        color: dimgray;
        font-size: 0.8em;
        font-weight: 700;
        padding: 0;
        margin: 0;
      }
      .panel-percentage {
        font-weight: 900;
        padding-right: 4px;
      }
      .panel-percentage-danger {
        color: red;
      }
      .panel-percentage-warning {
        color: gold;
      }
      .panel-percentage-success {
        color: lime;
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
    } // end of dashboard-info
    .panel-with-title {
      .panel-title {
        padding: 0;
        font-weight: 700;
        color: dimgray;
      }
      .clearfix {
        &:before, &:after {
          display: table;
          content: ""
        }
        &:after {
          clear: both;
        }
      }
    }
  }
</style>
