<script setup>
import { posts } from '../data/mockdata'
import { watchEffect } from 'vue';
import { useRouteTitle } from '../composables/useRouteTitle';
const { categoryName, currentTitle } = useRouteTitle()
// watchEffect(() => {
//   document.title = `${currentTitle.value} | 測試網站`;
// });
</script>

<template>
  <div class="h-screen w-[98%] lg:w-[90%] mx-auto mt-14 text-primary-300 tracking-wider">

    我是咖啡豆單頁面
    我是{{ currentTitle }}文章列表

    <template v-for="post in posts" :key="post.id">
      <RouterLink v-show="categoryName === post.catagory" :to="{ name: post.routeName, params: {category: post.category, articleId: post.id} }">文章內文</RouterLink>

    </template>
  </div>
</template>