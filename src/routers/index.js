import { createRouter, createWebHistory, RouterView } from 'vue-router'
// import { h } from 'vue';

const routes= [
  {
    path:'/',
    name: 'home',
    component: () => import('../view/Home.vue'),
  },
  //因為我的 :menu不需要渲染東西但是各自獨立的頁面，所以攤平寫是比較好的做法
  {
    path:'/beanlight/:category',
    name: "beanlightList",
    component: () => import('../view/BeanlightList.vue'),
    meta: {menu: 'beanlight'}
  },
  {
    path:'/coffveee/:category',
    name: "coffveee_List",
    component: () => import('../view/Coffveee_List.vue'),
    meta: {menu: 'coffveee'}
  },
  {
    path:'/commond/:category',
    name: "commondList",
    component: () => import('../view/CommondList.vue'),
    meta: {menu: 'commond'}
  },
  {
    path: '/beanlight/:category/:articleId',
    name:"beanlightContent",
    component: () => import('../view/ArticleInner.vue'),
  },
  {
    path: '/coffveee/:category/:articleId',
    name:"coffveeeContent",
    component: () => import('../view/ArticleInner.vue'),
  },
  {
    path: '/commond/:category/:articleId',
    name:"commondContent",
    component: () => import('../view/ArticleInner.vue'),
  },
  {
    path:'/pickpick/:category',
    name:"productList",
    component: () => import('../view/ProductList.vue'),
    meta: {menu: 'pickpick'}
  },
  {
    path: '/pickpick/:category/:productId',
    name:"product",
    component:  () => import('../view/ProductDetail.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})




export default router;