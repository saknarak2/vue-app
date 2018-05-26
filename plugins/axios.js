import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const request = axios.create({
  baseURL: '/api',
  // baseURL: 'http://192.168.0.1:7000/api',
})

Vue.use(VueAxios, request)
