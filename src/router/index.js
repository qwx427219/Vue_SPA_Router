import Vue from 'vue'
import VueRouter from 'vue-router'

import MyHome from '@/pages/MyHome'
import MyAbout from '@/pages/MyAbout'
import MyNews from '@/pages/MyNews'
import MyMessage from '@/pages/MyMessage'
import MyDetail from '@/pages/MyDetail'
import MyTest1 from '@/pages/MyTest1'
import MyLogin from '@/pages/MyLogin'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: MyHome,
      redirect: '/home/news',
      children: [
        {
          path: 'news',
          component: MyNews,
          props($route) {
            return {
              ...$route.query
            }
          },
          meta: {
            authLevel: 1 // 登录即可访问
          },
          beforeEnter(to, from, next) {
            console.log('beforeEnter:', from.path, '=>', to.path);
            next()
          },
        },
        {
          path: 'message',
          components: {
            default: MyMessage,
            a: MyTest1
          },
          meta: {
            authLevel: 1 // 登录即可访问
          }
        }
      ]
    },
    {
      path: '/about',
      component: MyAbout,
      meta: {
        authLevel: 2 // 最高权限才能访问
      },
      beforeEnter(to, from, next) {
        console.log('beforeEnter:', from.path, '=>', to.path);
        next()
      },
      children: [
        {
          name: 'guanyu',
          path: ':id',
          component: MyDetail,
          props($route) {
            return {
              id: $route.params.id
            }
          },
          meta: {
            authLevel: 2 // 最高权限才能访问
          },
          beforeEnter(to, from, next) {
            console.log('beforeEnter:', from.path, '=>', to.path);
            next()
          }
        }
      ]
    },
    {
      path: '/login',
      component: MyLogin,
      meta: {
        authLevel: 0 // 无需登录，即可访问
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach:', from.path, '=>', to.path);
  const token = JSON.parse(localStorage.getItem('token'))
  let permission = 0; // 未登录

  if (token) {
    const { name, pass } = token
    if (name == 'qfc' && pass == '123456') {
      permission = 2 // 已登录，最高权限
    } else {
      permission = 1 // 已登录，普通权限
    }
  }

  if (to.meta.authLevel > permission) {
    if (permission == 0) {
      alert('请先登录')
      return next('/login')
    } else {
      alert('访问权限不足，访问被中止')
      return next(false)
    }
  } else {
    return next()
  }
})

router.afterEach((to, from) => {
  console.log('afterEach:', from.path, '=>', to.path);
  document.title = to.path
})

export default router