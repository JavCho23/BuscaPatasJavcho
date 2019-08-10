import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*' ,
      redirect: 'home'
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'themain',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/TheMain.vue')
    },
    {
      path : '/perritos',
      name : 'perritos',
      component: () => import ('@/views/Perritos.vue')
    },
    {
      path : '/registrar',
      name : 'registrar',
      component: () => import ('./views/RegisterPets.vue'),
      meta: {
        authenticacion: true
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  let user = firebase.auth().currentUser;
  let authenticacion = to.matched.some(record => record.meta.authenticacion);
  if (authenticacion && !user) {
    next('login')
  } else {
    next()
  }
})

export default router

