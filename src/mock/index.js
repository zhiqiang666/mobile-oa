// 模拟数据
import Mock from 'mockjs'
import { getInfo } from './response/user'
Mock.mock("http://localhost:8080/getinfo", 'get', getInfo)
export default Mock
