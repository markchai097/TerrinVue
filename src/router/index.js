import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service from '../views/Service.vue'
import ServiceInside from '../views/ServiceInside.vue'
import Mall from '../views/Mall.vue'
import MallAll from '../views/MallAll.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showSwiper: true,
      showHeader: false,
      title: '首頁-特林數碼'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      showSwiper: false,
      showHeader: true,
      title: '關於我們-特林數碼'
    },
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    meta: {
      showSwiper: false,
      showHeader: true,
      title: '服務項目-特林數碼'
    },
  },
  {
    path: '/service/serviceInside',
    name: 'ServiceInside',
    component: ServiceInside,
    meta: {
      showSwiper: false,
      showHeader: true,
      pageIside:'服務項目01',
      title: '服務項目01-特林數碼'
    },
  },
  {
    path: '/mall',
    name: 'Mall',
    component: Mall,
    meta: {
      showSwiper: false,
      showHeader: true,
      title: '數碼商城-特林數碼'
    },
    children:[
      {
    path: 'mallall',
    name: 'MallAll',
    component: MallAll,
    meta: {
      showSwiper: false,
      showHeader: true,
      title: '數碼商城All-特林數碼'
    },
    }
  ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      showSwiper: false,
      showHeader: true,
      title: '聯絡我們-特林數碼'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 前置守卫
router.beforeEach((to, from, next) => {
  // to: 要变成...    from: 当前是...
  document.title = to.meta.title //切换标题

  next()
})
export default router