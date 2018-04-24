import axios from 'axios'
import { dashboard } from './api'

function showPaths () {
  console.log(dashboard)
}

function dashboardHDFS () {
  return axios.get(dashboard.hdfs)
}

function dashboardMapreduce () {
  return axios.get(dashboard.mapreduce)
}

function dashboardSpark () {
  return axios.get(dashboard.spark)
}

function dashboardTenant () {
  return axios.get(dashboard.tenant)
}

export { showPaths, dashboardHDFS, dashboardMapreduce, dashboardSpark, dashboardTenant }
