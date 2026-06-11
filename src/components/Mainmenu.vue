<script setup>
import { ref, watch } from 'vue'
import { memberFunc, menuList } from '../data/mockdata'
import { useRoute } from 'vue-router';

const route = useRoute();

// 監聽路由，只要網址改變，就把選單跟子選單都收起來
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
    activeSubmenu.value = null; // 順便把打開的子選單也重設，體驗較好
  }
);
const isMenuOpen = ref(false) //手機版選單開關狀態
const activeSubmenu = ref(null) //準備存打開的那個
// const submenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  activeSubmenu.value = null
}
const toggleSub = (subTitle) => {
  activeSubmenu.value = activeSubmenu.value === subTitle ? null : subTitle
  // console.log(activeSubmenu.value)
}

</script>

<template>
  <div class="h-screen w-full bg-black/45 opacity-60 absolute inset-0" v-if="isMenuOpen==true"></div>
  <header class="fixed top-0 w-full lg:px-10 text-primary font-bold text-second-500 bg-[#fff8f2] z-100">
    <div class="max-w-300 w-full md:w-[90%] mx-auto ">
      <div class="flex px-4 items-center justify-between border-b-[0.5px] border-b-amber-950/20 py-3">
        <div class="flex lg:hidden items-center cursor-pointer" @click="toggleMenu">
            <span class="material-symbols-outlined" v-show="isMenuOpen ==false">
              local_cafe
            </span>
            <span class="material-symbols-outlined text-primary-500" v-show="isMenuOpen == true">
              coffee
            </span>
        </div>
        <a class="inline-block" href="http://localhost:5173">
          <span class="material-symbols-outlined">
            home
          </span>
        </a>
        <nav class="hidden lg:flex">
          <template v-for="item in menuList" :key="item.title">
            <div class="relative" v-if="item.submenu">
              <button class="" @click="toggleSub(item.title)">{{ item.title }}</button>
              <div class="subList absolute ml-6 font-semibold" v-show="activeSubmenu === item.title">
                <RouterLink class="btn" :to="{ name: link.routeName, params:{category: link.categoryValue} }" v-for="link in item.submenu" :key="item.submenu.title">{{ link.title }}</RouterLink>
              </div>
            </div>
            <button v-else>{{ item.title }}</button>
          </template>
        </nav>
        <div class="relative">
          <button class="">hi, member</button>
          <div class="subList absolute right-0 lg:right-0 hidden font-semibold">
            <RouterLink class="btn" to={{ item.url }} v-for="item in memberFunc" :key="item.title">{{ item.title }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <nav class="mobilemenu fixed top-14.25 w-60 h-screen lg:hidden pl-3.5 pr-2 text-sm text-second-500 border-r-[0.5px] border-r-second-100 cursor-pointer z-100 bg-[#FFF8F2]"
      :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'">
      <template v-for="item in menuList" :key="item.title">
        <div class="relative" v-if="item.submenu">
          <div class="py-2.5 pl-2 border-b-[0.5px] border-second-300 active:text-second-300" @click="toggleSub(item.title)">{{ item.title }}</div>
          <div class="ml-3 font-semibold" v-show="activeSubmenu === item.title">
            <RouterLink class="block py-2 pl-2 text-sm border-b-[0.5px] border-b-gray-300 active:text-second-500" v-for="link in item.submenu" :key="item.submenu.title" :to="{ name:link.routeName, params:{category: link.categoryValue}  }">{{ link.title }}</RouterLink>
          </div>
        </div>
        <div class="py-2.5 pl-2 border-b-[0.5px] border-second-300 active:text-second-300 tracking-widest" v-else>
          <RouterLink >{{ item.title }}</RouterLink>
        </div>
      </template>
    </nav>
  </header>
 
</template>
