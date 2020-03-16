import axios from './index'
export const getInfo = () => {
  return axios.request({
    url:'./getinfo',
    method:'get'
  })
}
