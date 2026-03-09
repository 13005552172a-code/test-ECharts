import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('../views/HomeView.vue')
    },
    {
      path:'/order',
      name:'order',
      component:()=>import('../views/OrderView.vue')
    },
    {
      path:'/count',
      name:'count',
      component:()=>import('../views/CountView.vue')
    },
    {
      path:'/other',
      name:'other',
      component:()=>import('../views/OtherView.vue')
    }
  ],
})

export default router
