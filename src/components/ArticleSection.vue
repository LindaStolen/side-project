<script setup>

defineProps({
  title: String,
  content: String,
  picture: String,
  url: {
    type: String,
    default: '#'
  },
  // 控制圖、文左右位置
  reverse: {
    type: Boolean, default: false,
  }
})
</script>

<template>
  <div :class="reverse ? 'lg:mt-8' : 'mt-5 lg:mt-10'">
    <div class="relative lg:flex h-50 overflow-hidden" :class="{'lg:flex-row-reverse' : reverse}">
      <div class="w-full h-full lg:w-[50%] mask-r-from-30%  bg-cover opacity-35 lg:opacity-100"
        :class="reverse ? 'mask-l-from-30%' : 'mask-r-form-30%'" :style="{ backgroundImage: `url(${picture})`}"
      ></div>
      <div class="absolute lg:static top-0 left-0 w-full lg:w-[50%] px-10 pt-5 pb-3" :class="{'z-10 lg:z-0' : reverse}">
        <div class="title mb-1.5 text-second-500 font-semibold text-sm lg:text-base">{{ title }}</div>
        <div class="content text-xs lg:text-sm leading-6 text-second-400">
          {{ content }}
        </div>
        <div class="flex justify-end items-end"><a href="" class="text-primary-300 text-sm">Read more</a></div>
      </div>
    </div>
  </div>

  <!-- <div class="mt-5 lg:mt-10">
    <div class="relative lg:flex h-50 overflow-hidden">
      <div class="w-full h-full lg:w-[50%] mask-r-from-30% bg-[url(./assets/images/article-1.jpg)] bg-cover opacity-35 lg:opacity-100">
      </div>
      <div class="absolute lg:static top-0 left-0 w-full lg:w-[50%] px-10 pt-5 pb-3">
        <div class="title mb-1.5 text-second-500 font-semibold text-sm lg:text-base">天啊認識對我來了作關喜歡你，以後前就言論自你我</div>
        <div class="content text-xs lg:text-sm leading-6 text-second-400">
          到了出來的很好問一下然沒有：不過女關係在的主要是後一最多，喜歡小精靈外高中故事的⋯之前的麼辦，部分都了，候就時候我我都可能要。很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。
        </div>
        <div class="flex justify-end items-end"><a href="" class="text-primary-300 text-sm">Read more</a></div>
      </div>
    </div>
  </div>

  <div class="lg:mt-8">
    <div class="relative lg:flex h-50 overflow-hidden">
      <div class="absolute lg:static top-0 left-0 w-full lg:w-[50%] px-10 pt-5 pb-3 z-10 lg:z-0">
        <div class="title mb-1.5 text-second-500 font-semibold text-sm lg:text-base">天啊認識對我來了作關喜歡你，以後前就言論自你我</div>
        <div class="content text-xs lg:text-sm leading-6 text-second-400">
          到了出來的很好問一下然沒有：不過女關係在的主要是後一最多，喜歡小精靈外高中故事的⋯之前的麼辦，部分都了，候就時候我我都可能要。很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。
        </div>
        <div class="flex justify-end items-end"><a href="" class="text-primary-300 text-sm">Read more</a></div>
      </div>
      <div class="w-full h-full lg:w-[50%] mask-l-from-30% bg-[url(./assets/images/article-2.jpg)] bg-cover opacity-35 lg:opacity-100">
      </div>
    </div>
  </div> -->
</template>