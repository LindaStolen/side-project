<script setup>
import { useRouteTitle } from '../composables/useRouteTitle';
import { posts } from '../data/mockdata'

const { categoryName, currentTitle } = useRouteTitle()

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