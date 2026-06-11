<script setup>
const emit = defineEmits(['prev','next'])
</script>

<template>
  <div class="flex justify-center lg:justify-end mt-5">
    <div @click="emit('prev')" class="w-[2.5] h-[2.5] p-1.5 flex items-center bg-white cursor-pointer active:shadow-sm active:shadow-second-200">
      <span class="material-symbols-outlined">
        arrow_back
      </span>
    </div>
    <div @click="emit('next')" class="ml-3 w-[2.5] h-[2.5] p-1.5 flex items-center bg-white cursor-pointer active:shadow-sm active:shadow-second-200">
      <span class="material-symbols-outlined">
        arrow_forward
      </span>
    </div>
  </div>
</template>