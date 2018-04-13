import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Home from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:'/home',
    	name:'Home',
    	component: Home
    }
  ]
})
