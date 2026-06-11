<script setup>
defineProps({
  title: String,
  picture:String,
  content:String,
  url: {
    type: String,
    default: '#',
  }
})
</script>

<template>
  <div>
      <p class="mb-4 text-second-500 font-bold truncate text-ellipsis">✦  {{title}}</p>
      <div class="flex">
        <div class="w-[120%] md:max-w-50 md:min-w-45">
          <img :src="picture" width="100%" alt="">
        </div>
        <div class="ml-5 pt-2 leading-6 text-sm flex flex-col">
          <div class="line-clamp-3">
            {{content}}
          </div>
          <div class="text-right pt-5"><a :href="url" class="text-primary-400">Read more</a></div>
        </div>
      </div>
    </div>
</template>