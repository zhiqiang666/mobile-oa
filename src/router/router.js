import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'Home',
    component: Home,
    props: route => ({
      food: route.query.food
    })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banan'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/hw',
    name: 'hw',
    component: () => import('../components/HelloWorld.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      // console.log(to.name)
      // console.log(from.name)
      next()
    }
  },
  {
    // :name 可以通过$router.param.name获取
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/parent.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  },
  {
    path: '/main',
    // redirect: {
    //   name: 'Home'
    // }
    redirect: to => '/'
    // redirect: to => {
    //   return {
    //     name:'Home'
    //   }
    // }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/tel',
    name: 'tel',
    component: () => import('@/views/tel.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error.vue')
  }
]
