import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: 'DestinationDetails' */ '../views/DestinationDetails'),
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () => import(/* webpackChunkName: 'ExperienceDetails' */ '../views/ExperienceDetails')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'navigation-active-class',
  routes
})

export default router
