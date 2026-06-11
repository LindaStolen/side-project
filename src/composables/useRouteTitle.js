import { computed } from 'vue';
import { titleMap } from '../data/mockdata'
import { useRoute } from 'vue-router';

export function useRouteTitle (){
  const route = useRoute()
  
  const categoryName = computed(() => 
    route.params.category
    );
  const currentTitle = computed(() => {
    const m = route.meta.menu
    const c = route.params.category
    // console.log(m)
    if(!m || !c) return '文章列表'
    const menu = titleMap[m]?.label;
    const sub = titleMap[m]?.submenu?.[c];
    const titleName = `${menu} :: ${sub}`
    // console.log(titleName)
    return titleName || '文章列表'
  });
  return {
    categoryName,
    currentTitle
  }
}
