<script setup>
import { posts } from '../data/mockdata'
</script>
<template>
  <div class="h-screen w-[98%] lg:w-[90%] mx-auto mt-14 lg:flex text-primary-300 tracking-wider">
  我是文章內文
  {{ posts.content }}
  </div>
</template>