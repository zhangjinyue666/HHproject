import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:()=>import("../views/Three/Home")
  },
  {
    path:"/mine",
    component:()=>import("../views/Two/Mine")
  }
]

const router = new VueRouter({
  routes
})

export default router
