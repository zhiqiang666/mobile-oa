import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const LOGSTATE = true;
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (LOGSTATE) next()
    else next({ name: 'login' })
  } else {
    if (LOGSTATE) next({ name: 'Home' })
    else next()
  }
})
router.afterEach((to, from) => {
  //后置钩子，全局路由完成后的钩子
})
export default router

/** 完整导航解析流程
 *  1、导航被触发。
 *  2、离开了组件，使用leave钩子。
 *  3、调用全局钩子，使用beforeEach。
 *  4、重用组件调用update钩子。
 *  5、调用路由配置beforeEnter。
 *  6、解析异步路由组件。
 *  7、激活组件调用beforeEnter。
 *  8、调用全局beforeResolve
 *  9、确认导航后调用beforeEach
 *  10、更新DOM
 *  11、创建好的实例嗲用beforeRouterEnter守卫中传给next的回调函数
 */
