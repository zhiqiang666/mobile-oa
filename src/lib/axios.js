import axios from 'axios'
import { baseURL } from '@/config/index'
class HttpRequest {
  constructor(baseUrl) {
    baseUrl = baseUrl || baseURL
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl
      //设置header全局请求信息等
    }
    return config
  }
  //请求拦截器
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      //全局loading等，请求前的控制 loading.show
      if (!Object.keys(this.queue).length) console.log('未完成')
        this.queue[url] = true
      return config
    }, err => {
      return Promise.reject(err)
    })
    //响应拦截器
    instance.interceptors.response.use(response => {
      const { data, status } = response
      delete this.queue[url]
      return { data, status }
    }, err => {
      delete this.queue[url]
      return Promise.reject(err)
    })
  }
  //创建实例
  request(options) {
    const instance = axios.create()
    //合并对象
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
