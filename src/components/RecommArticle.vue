<script setup>
import { ref, onMounted } from 'vue';
import Pagenation from './Pagenation.vue';
import RecommondCard from './RecommondCard.vue';
import { recommondList } from '../data/mockdata'; //假資料基礎

const dataList = ref([]); //拿進來準備顯示的資料陣列
const currentPage = ref(1)
const maxPage = 2 //假設

const fetchData = (page)=>{
  //模擬API請求：根據頁碼取資料
  // isLoading.value = ture 開始轉圈圈
  const data = recommondList[`page${page}`] //假資料的哪一頁
  if(data){
    dataList.value = data;
    currentPage.value = page
  }
  // isLoading.value = false 結束圈圈
}


//掛載page1 的時候
onMounted(() => fetchData(1))
const handleNext = () => {
  if(currentPage.value < maxPage){
    fetchData(currentPage.value + 1);
  }else{
    alert('到底囉！')
  }
}

const handlePrev = ()=> {
  if(currentPage.value > 1){
    fetchData(currentPage.value - 1)
  }else{
    alert('到第一頁了。')
  }
}

</script>
<template>
  <div class="lg:grid grid-cols-2 gap-x-4 mt-5 lg:mt-10">
    <RecommondCard v-for="(item, index) in dataList" :key="item.id" v-bind="item" :class="{'mt-5 lg:mt-0': index !== 0}"/>
  </div>
  <Pagenation @next="handleNext" @prev="handlePrev"/>

</template>