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
          <div id="cpuecharts"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="panel-with-title">
          <div slot="header" class="clearfix">
            <font class="panel-title">{{ $t('dashboard.Clustersatisfy') }}</font>
          </div>
          <div id="clusterecharts"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="16">
        <el-card shadow="hover" class="panel-with-title">
          <div slot="header" class="clearfix">
            <font class="panel-title">{{ $t('dashboard.Memoryusage') }}</font>
          </div>
          <div id="memoryecharts"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="panel-with-title">
          <div slot="header" class="clearfix">
            <font class="panel-title">{{ $t('dashboard.MRSparkjobtrends') }}</font>
          </div>
          <div id="mrsparkecharts"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { dashboardHDFS, dashboardMapreduce, dashboardSpark, dashboardTenant, dashboardCPUusage, dashboardMemoryusage } from '../services/mock'
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
      },
      echarts: {
        cpuusage: null,
        cluster: null,
        memoryusage: null
      },
      echarts_options: {
        cpuusage: {
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: []
          },
          yAxis: {
            axisLabel: {
              formatter: function (params) {
                return `${params}%`
              }
            },
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: {
            top: 10,
            right: 10,
            pieces: [{
              gt: 0,
              lte: 50,
              label: '0% ~ 50%',
              color: '#096'
            }, {
              gt: 50,
              lte: 80,
              label: '50% ~ 80%',
              color: '#ff9933'
            }, {
              gt: 80,
              label: '> 80%',
              color: '#cc0033'
            }],
            outOfRange: {
              color: '#999'
            }
          },
          series: {
            name: 'CPU usage',
            type: 'line',
            data: [],
            markLine: {
              silent: true,
              data: [{
                yAxis: 50
              }, {
                yAxis: 80
              }]
            }
          }
        },
        memoryusage: {
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: []
          },
          yAxis: {
            axisLabel: {
              formatter: function (params) {
                return `${params}%`
              }
            },
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: {
            top: 10,
            right: 10,
            pieces: [{
              gt: 0,
              lte: 50,
              label: '0% ~ 50%',
              color: '#096'
            }, {
              gt: 50,
              lte: 80,
              label: '50% ~ 80%',
              color: '#ff9933'
            }, {
              gt: 80,
              label: '> 80%',
              color: '#cc0033'
            }],
            outOfRange: {
              color: '#999'
            }
          },
          series: {
            name: 'CPU usage',
            type: 'line',
            data: [],
            markLine: {
              silent: true,
              data: [{
                yAxis: 50
              }, {
                yAxis: 80
              }]
            }
          }
        },
        cluster: {
          series: [
            {
              name: this.$t('dashboard.resourcesatisfy'),
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: true,
                  position: 'center',
                  textStyle: {
                    fontSize: '30'
                  }
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 100, name: `45%\n${this.$t('dashboard.resourcesatisfy')}`}
              ]
            }
          ]
        }
      }
    }
  },
  mounted () {
    /*
     * Get mock data of top line
     * HDFS
     * Mapreduce
     * Spark
     * Tenant
     */
    // HDFS
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
    // Mapreduce jobs
    dashboardMapreduce().then((response) => {
      this.mapreduce.jobs = Math.round(response.data.count)
      this.load_mapreduce = false
    }).catch((err) => {
      console.log(err)
      this.load_mapreduce = false
    })
    // Spark jobs
    dashboardSpark().then((response) => {
      this.spark.jobs = Math.round(response.data.count)
      this.load_spark = false
    }).catch((err) => {
      console.log(err)
      this.load_spark = false
    })
    // Tenant satisfation rate
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
    /*
     * Echarts
     * CPUusage
     * Cluster satisfation
     * Memoryusage
     * MRSpark jobs
     */
    // CPU usage
    let cpudom = document.getElementById('cpuecharts')
    if (cpudom) {
      this.echarts.cpuusage = this.$echarts.init(cpudom)
      this.echarts.cpuusage.setOption(this.echarts_options.cpuusage)
      dashboardCPUusage(100).then((response) => {
        this.echarts.cpuusage.setOption({
          xAxis: {
            data: response.map(function (item) {
              return item[0]
            })
          },
          series: {
            data: response.map(function (item) {
              return item[1]
            })
          }
        })
      }).catch((err) => {
        console.log(err)
      })
    }
    // Cluster satisfation
    let clusterdom = document.getElementById('clusterecharts')
    this.echarts.cluster = this.$echarts.init(clusterdom)
    this.echarts.cluster.setOption(this.echarts_options.cluster)
    // Memory usage
    let memorydom = document.getElementById('memoryecharts')
    if (memorydom) {
      this.echarts.memoryusage = this.$echarts.init(memorydom)
      this.echarts.memoryusage.setOption(this.echarts_options.memoryusage)
      dashboardMemoryusage(100).then((response) => {
        this.echarts.memoryusage.setOption({
          xAxis: {
            data: response.map(function (item) {
              return item[0]
            })
          },
          series: {
            data: response.map(function (item) {
              return item[1]
            })
          }
        })
      }).catch((err) => {
        console.log(err)
      })
    }
    // resize redraw echarts
    window.addEventListener('resize', this.echartsRedraw)
    /*
    window.onresize = () => {
      this.echarts.cpuusage.resize()
      this.echarts.cluster.resize()
    }
    */
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
  },
  methods: {
    echartsRedraw: function () {
      this.echarts.cpuusage.resize()
      this.echarts.cluster.resize()
      this.echarts.memoryusage.resize()
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.echartsRedraw)
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
    } // end of panel-with-title
    #cpuecharts {
      width: 100%;
      height: 460px;
    }
    #memoryecharts {
      width: 100%;
      height: 460px;
    }
    #clusterecharts {
      width: 100%;
      height: 460px;
    }
    #mrsparkecharts {
      width: 100%;
      height: 460px;
    }
  }
</style>
