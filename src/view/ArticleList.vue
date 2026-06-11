<script setup>
import { posts } from '../data/mockdata'
// import { watchEffect } from 'vue';
import { useRouteTitle } from '../composables/useRouteTitle';
// import router from '../routers';
// import { useRoute } from 'vue-router';

// const route = useRoute()
const { categoryName, currentTitle } = useRouteTitle()

// const titleMap = {
//   beanlight:{
//     'source': '品種與產地',
//     'profile': '烘焙度與風味'
//   },
//   coffveee:{
//     'tech-life': '科技產品',
//     'daily': '日常手札'
//   },
//   commond:{
//     'decoration': '裝潢風格',
//     'impressiveDrinks': '創意飲品'
//   },
//   pickpick:{
//     'beanList': '儀式感豆單',
//     'dripList': '效率派濾掛'
//   },
// }
// const categoryName = computed(() => 
//   route.params.category
//   );
// const currentTitle = computed(() => {
//   const m = route.params.menu
//   const c = route.params.category
//   return titleMap[m]?.[c] || '文章列表'
// });

// watchEffect(() => {
//   document.title = `${currentTitle.value} | 測試網站`;
// });




// 假設 allPosts 是你從 JSON 載入的所有文章
// const filteredPosts = computed(() => {
//   return posts.filter(post => post.category === route.params.category);
// });
</script>
<template>
  <div class="h-screen w-[98%] lg:w-[90%] mx-auto mt-14 text-primary-300 tracking-wider">
  
  <h2>我是{{ currentTitle }}文章列表</h2>
    <div class="grid grid-cols-4">
      <template v-for="post in posts" :key="post.id" >
        <RouterLink v-show="categoryName === post.category" :to="{ name: post.routeName, params: {category: post.category, articleId: post.id} }">
          {{ post.title }}
        </RouterLink>

      </template>
    </div>
  </div>
</template>