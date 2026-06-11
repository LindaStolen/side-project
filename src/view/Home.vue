<script setup>
import Slide from '../components/Slide.vue';
import RecommArticle from '../components/RecommArticle.vue';
import {articleList, commondList, howtoList, } from '../data/mockdata.js'
import ArticleSection from '../components/ArticleSection.vue';

</script>
<template>
  <div class="w-[98%] lg:w-[90%] mx-auto mt-14 lg:flex text-primary-300 tracking-wider">
    <div class="lg:w-[58%]" >
      <div class="pic h-25 lg:h-80 bg-[url(./assets/images/banner-2.jpg)] bg-top-center lg:bg-size-[125%]">
        <div class="w-full h-full bg-white opacity-20"></div>
      </div>
      <div class="text lg:h-60 my-5 lg:my-0 text flex items-center justify-end">
        <div class="relative w-[75%] lg:w-[85%] pl-15 pb-2 font-bold font-chinese-serif tracking-widest border-b-[0.5px] border-primary-100">
          <span class="inline-block absolute w-5 h-5 lg:w-10 lg:h-10 rounded-4xl bg-primary-100 top-5.5 -left-5 lg:top-1.5"></span>
          <div class="inline-block">一杯咖啡，</div><div class="inline-block ml-[12%]">到日常的選擇</div>
        </div>
      </div>
    </div>
    <div class="lg:w-[42%]">
      <div class="h-70">
        <div class="w-[70%] mt-8 pl-3 lg:pt-15 lg:pl-9">
          <p class="pb-2.5 text-xl font-semibold font-serif border-b-[0.5px] border-b-primary-100">Bean & Beyond</p>
          <p class="pt-2.5 text-sm">探索味覺與靈感的日常篇章</p>
        </div>
      </div>
      <!-- <img src="../assets/images/banner-1.jpg" alt="" srcset="" class=""> -->
      <div class="pic h-25 lg:h-70 mt-10 lg:mt-10 bg-[url(./assets/images/banner-1.jpg)] bg-center bg-cover">
        <div class="w-full h-full bg-white opacity-20"></div>
      </div>
    </div>
  </div>
  <div class="w-[98%] lg:w-[90%] mx-auto mt-18">
    <h3 class="text-center text-xl font-serif font-bold trcking-wide text-primary-300">Weekly Commond</h3>
    <Slide class="w-full lg:justify-evenly items-center mt-10 pb-5 lg:pb-0">
      <div class="max-w-45 max-h-45 shrink-0 mr-5 overflow-hidden rounded-full snap-center" v-for="item in commondList" :key="item.id">
        <a :href="item.url"><img :src="item.picture" alt="" srcset=""></a>
      </div>
    </Slide>
  </div>
  <div class="xl:w-[90%] xl:mx-auto mt-18">
    <h3 class="text-center text-xl font-serif font-bold trcking-wide text-primary-300">New Sight New Fire</h3>
    <ArticleSection v-for="(item, index) in articleList" :key="item.id" v-bind="item" :reverse="index % 2 !==0"/>
  </div>
  <div class="xl:w-[90%] xl:mx-auto mt-18 py-8 bg-second-300">
    <h3 class="w-[85%] ml-10 lg:ml-30 mb-3 font-bold text-white">How to Brew</h3>
    <Slide class="w-[85%] ml-10 lg:ml-30 justify-between xl:justify-start pb-10">
      <div class="relative mr-10 flex flex-col justify-between items-stretch" v-for="item in howtoList" :key="item.id">
        <div class="w-50 h-68 overflow-hidden">
          <img :src="item.picture" alt="" srcset="" width="120%">
        </div>
        <div class="absolute -right-5.5 bottom-4.5 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer hover:shadow-md hover:shadow-second-500 bg-amber-950">
          <a :href="item.url">
            <span class="material-symbols-outlined text-white">
              arrow_right_alt
            </span>
          </a>
        </div>
        <p class="mt-2 text-white text-sm font-light">{{item.title}}</p>

      </div>
    </Slide>
  </div>
  <div class="w-[98%] lg:w-[90%] mx-auto mt-18">
    <h3 class="text-center text-xl font-serif font-bold trcking-wide text-primary-300">Weekly Commond</h3>
    <RecommArticle />
  </div>
  <!-- <RouterView /> -->
</template>