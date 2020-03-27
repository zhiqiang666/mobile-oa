import axios from 'axios'
import { baseURL } from '@/config/index'
class HttpRequest {
  constructor(baseUrl) {
    baseUrl = baseUrl || baseURL
    this.baseUrl = baseUrl
    // this.queue = {}
  }
  getInsideConfig() {
    const config = {
      //设置header全局请求信息等
      baseUrl: this.baseUrl,
      // timeStamp:timeStamp
    }
    return config
  }
  //请求拦截器
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      //全局loading等，请求前的控制 loading.show
      // if (!Object.keys(this.queue).length) console.log('未完成')
      // this.queue[url] = true
      return config
    }, err => {
      return Promise.reject(err)
    })
    //响应拦截器
    instance.interceptors.response.use(response => {
      const { data, status } = response
      // delete this.queue[url]
      return { data, status }
    }, err => {
      delete this.queue[url]
      return Promise.reject(err)
    })
  }
  //创建实例
  request(options) {
    //get方法添加个时间戳放止被缓存重定向
    if (options.method === 'get' || !options['method'] || !options['params']) {
      Object.assign(options, {
        params: {
          timeStamp: new Date().getTime()
        }
      })
    }
    const instance = axios.create()
    //合并对象
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
