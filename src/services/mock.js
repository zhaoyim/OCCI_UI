import axios from 'axios'
import moment from 'moment'
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

function dashboardCPUusage (datalen) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let data = []
      for (let a = 0; a < datalen; a++) {
        data.push([moment().subtract(30 * (datalen - a), 'm').format('M/DD/YYYY HH:mm'), nextRandom(0, 100)])
      }
      resolve(data)
    }, 1000)
  })
}

function dashboardMemoryusage (datalen) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let data = []
      for (let a = 0; a < datalen; a++) {
        data.push([moment().subtract(30 * (datalen - a), 'm').format('M/DD/YYYY HH:mm'), nextRandom(0, 100)])
      }
      resolve(data)
    }, 1000)
  })
}

function nextRandom (min, max) {
  let minInt = Math.floor(min)
  let maxInt = Math.floor(max)
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt
}

export { showPaths, dashboardHDFS, dashboardMapreduce, dashboardSpark, dashboardTenant, dashboardCPUusage, dashboardMemoryusage }
