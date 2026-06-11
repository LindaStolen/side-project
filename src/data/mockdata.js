export const getImageUrl = (name) => {
  // 注意：這裡的路徑必須從該 function 所在的檔案出發
  // 假設你的圖片都在 assets/images 下
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

//這裡的資料都是要塞進router設計的框架中，所以這邊的key要變成參數到router跟結構裡
export const menuList = [
  {
    title:"Beanlight", //顯示在頁面上的字樣
    menu: "beanlight", //大分類
    submenu: [
      // 這裡的routeName 因為在結構裡是取router設定裡的name，所以要跟那邊一樣，原本寫在這裡的值要變成參數
      // categoryValue 是小分類
      {title:"品種與產地", routeName:'beanlightList', categoryValue:"source"},
      {title:"烘焙度與風味", routeName:'beanlightList', categoryValue:"profile"},
    ]
  },
  {
    title:"Coffveee！",
    menu: "coffveee",
    submenu: [
      {title:"科技產品", routeName:'coffveee_List', categoryValue:"tech-life"},
      {title:"日常手札", routeName:'coffveee_List', categoryValue:"daily"},
    ]
  },
  {
    title:"Cafe Walk",
    menu: "commond",
    submenu: [
      {title:"裝潢風格", routeName:'commondList', categoryValue:"decoration"},
      {title:"創意飲品", routeName:'commondList', categoryValue:"impressiveDrinks"}
    ]
  },
  {
    title:"Pick Pick",
    menu: "pickpick",
    submenu: [
      {title:"儀式感豆單", routeName:'productList', categoryValue:"beanList"},
      {title:"效率派濾掛", routeName:'productList', categoryValue:"dripList"}
    ]
  },
]

//選單顯示在分頁頁籤上
export const titleMap = {
  beanlight:
  {
    label:'豆大的事',
    submenu: { //大分類 
      'source': '品種與產地', //小分類
      'profile': '烘焙度與風味'
    },
  }, 
  coffveee: 
  { 
    label:'生活咖',
    submenu: {
      'tech-life': '科技產品',
      'daily': '日常手札'
    }
  },
  commond: 
  {
    label: '店家推薦',
    submenu: {
      'decoration': '裝潢風格',
      'impressiveDrinks': '創意飲品'
    }
  },
  pickpick: 
  {
    label:'選品味',
    submenu: {
      'beanList': '儀式感豆單',
      'dripList': '效率派濾掛'
    },
  }
}


export const memberFunc = [
  {
    title: 'Profile', url: ""
  },
  {
    title: 'cuppy perks', url: ""
  },
  {
    title: 'order', url: ""
  },
  {
    title: 'cupboard', url: ""
  },
]

export const howtoList = [
  {
    id: 0,
    title: "好一點才會只是片需要不餅乾",
    url: "https://google.com",
    picture: getImageUrl("square-1.jpg"),
  },
  {
    id: 1,
    title: "月亮類的生在在，應該也他不是",
    url: "https://instagram.com",
    picture: getImageUrl("square-2.jpg"),
  },
  {
    id: 2,
    title: "本人報名時麼都超多現在還",
    url: "https://cn.vuejs.org/examples/#markdown",
    picture: getImageUrl("square-3.jpg"),
  },
  {
    id: 3,
    title: "結婚了自我因為他都因為，也想",
    url: "https://tailwindcss.com/docs/adding-custom-styles",
    picture: getImageUrl("square-4.jpg"),
  },
];
export const commondList = [
  { id: 0, picture: getImageUrl("circle-1.jpg"), url: "" },
  { id: 1, picture: getImageUrl("circle-2.jpg"), url: "" },
  { id: 2, picture: getImageUrl("circle-3.jpg"), url: "" },
  { id: 3, picture: getImageUrl("circle-4.jpg"), url: "" },
];

export const recommondList = {
  page1: [
    {
      id: 0,
      title:
        "考如果是，就好我從了的小活的果是，就好我從了的小活的果是，就好我從了的小活的",
      picture: getImageUrl("recommond-1.jpg"),
      content:
        "很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。身邊的可以去大是，行為地預計暴差很多，還的人覺得是一下總是會，一點定活動男主角。",
      url: "",
    },
    {
      id: 1,
      title: "考如果是，就好我從了的小活的的小",
      picture: getImageUrl("recommond-2.jpg"),
      content:
        "很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。身邊的可以去大是，行為地預計暴差很多，還的人覺得是一下總是會，一點定活動男主角。",
      url: "",
    },
  ],
  page2: [
    {
      id: 4,
      title: "考如果是，就好我從了的小活的",
      picture: getImageUrl("recommond-1.jpg"),
      content:
        "很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。身邊的可以去大是，行為地預計暴差很多，還的人覺得是一下總是會，一點定活動男主角。",
      url: "",
    },
    {
      id: 5,
      title: "考如果是，就好我從了的小活的的小的小",
      picture: getImageUrl("recommond-2.jpg"),
      content:
        "很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。身邊的可以去大是，行為地預計暴差很多，還的人覺得是一下總是會，一點定活動男主角。",
      url: "",
    },
  ],
};

export const handleNextPage = async () => {
  console.log("取得資料");
  recommondList.value = [
    {
      id: 2,
      title: "考如果是，就好我從了的小活的了的小活的",
      picture: getImageUrl("recommond-2.jpg"),
      content:
        "很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。身邊的可以去大是，行為地預計暴差很多，還的人覺得是一下總是會，一點定活動男主角。",
      url: "",
    },
    {
      id: 3,
      title: "考如果是，就好我從了的小活的了的小活",
      picture: getImageUrl("recommond-1.jpg"),
      content:
        "很像明廣是，手結果想要像感覺很吧我感想：我的練都應該也。身邊的可以去大是，行為地預計暴差很多，還的人覺得是一下總是會，一點定活動男主角。",
      url: "",
    },
  ];
};

export const articleList = [
  {
    id: 0,
    title: "手結果想要像感覺很吧我感想：我的練都應該也",
    content: "怎樣的經可以分鐘的面睡著了：者的傍晚時，不要注照⋯一半他們的，自然後看，慢慢絕聖誕。怎樣的經可以分鐘的面睡著了：者的傍晚時，不要注照⋯一半他們的，自然後看，慢慢絕聖誕。",
    picture: getImageUrl("article-1.jpg"),
    url: "#",
  },
  {
    id: 1,
    title: "了很久有點我ㄉ真換人類，搞不好迷方都覺真的要加熱",
    content: "是是有是自己⋯恭喜人可能個月下三白普通的出來了。平常之前有一段時，的啊不好意環呢幫我。造成花大概他在就是最，還沒圖還是想不用媽突然。",
    picture: getImageUrl("article-2.jpg"),
    url: "#",
  },
]


//全網站文站暫時資料
export const posts = [
  { id: 1, category: "source", title: "衣索比亞產區風味分析", content: "衣索比亞咖啡的經典花香與柑橘調。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 2, category: "source", title: "巴拿馬藝伎豆溯源", content: "探索藝伎品種的起源與傳奇。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 3, category: "source", title: "哥倫比亞水洗處理法", content: "標準的水洗程序對風味的影響。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 4, category: "source", title: "肯亞的強烈酸質特性", content: "為何肯亞豆總是充滿爆發力？", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 5, category: "source", title: "印尼曼特寧的深烘培", content: "泥土與香料氣息的迷人平衡。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 6, category: "source", title: "巴西黃波旁處理工藝", content: "甜度與厚實感的黃色品種。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 7, category: "source", title: "哥斯大黎加蜜處理", content: "精緻的蜜處理工藝介紹。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 8, category: "source", title: "牙買加藍山的分級制度", content: "深入了解高貴的咖啡分級。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 9, category: "source", title: "薩爾瓦多高海拔種植", content: "海拔如何影響咖啡的酸甜比。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 10, category: "source", title: "台灣阿里山咖啡崛起", content: "本土咖啡農的堅持與創新。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 11, category: "profile", title: "從行銷轉職前端開發", content: "面對未知挑戰的勇氣與策略。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 12, category: "profile", title: "我的第一支 Vue 專案", content: "菜鳥前端的跌撞學習過程。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 13, category: "profile", title: "如何規劃時間管理", content: "我是如何兼顧工作與興趣的。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 14, category: "profile", title: "關於我的咖啡執念", content: "從喝咖啡到了解咖啡的轉折點。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 15, category: "profile", title: "閱讀與思考的習慣", content: "建立自己的知識體系方法。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 16, category: "profile", title: "職場溝通的藝術", content: "軟實力在技術職位的重要性。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 17, category: "profile", title: "遠端工作的挑戰", content: "居家工作的紀律管理。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 18, category: "profile", title: "關於學習的定義", content: "跳脫舒適圈的成長心法。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 19, category: "profile", title: "我的 Side Project 願景", content: "為何決定動手蓋這個網站。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 20, category: "profile", title: "年度目標回顧與展望", content: "設定具體目標的執行力。", date: "2026-06-01", routeName: "beanlightContent" },
  { id: 21, category: "tech-life", title: "Vue 3 組合式 API 實戰", content: "Ref 與 Reactive 的使用時機。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 22, category: "tech-life", title: "前端部署環境架設", content: "從 Git 到 Vercel 的流程。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 23, category: "tech-life", title: "CSS 彈性排版心得", content: "Flexbox 與 Grid 的選擇。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 24, category: "tech-life", title: "如何與 API 對接", content: "Fetch 與 Axios 的異同。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 25, category: "tech-life", title: "前端性能優化基礎", content: "圖片壓縮與懶加載技巧。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 26, category: "tech-life", title: "Markdown 使用指南", content: "為什麼工程師愛用 Markdown。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 27, category: "tech-life", title: "瀏覽器偵錯技巧", content: "F12 開發者工具的隱藏功能。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 28, category: "tech-life", title: "版本控制 Git 指令表", content: "常用的分支與合併策略。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 29, category: "tech-life", title: "網站無障礙設計初探", content: "提升網站的通用可讀性。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 30, category: "tech-life", title: "AI 輔助程式編寫", content: "如何正確引導 AI 寫出代碼。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 31, category: "daily", title: "Swing Dance 週末工作坊", content: "舞動間的節奏感與社交樂趣。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 32, category: "daily", title: "早晨的儀式感", content: "沖煮咖啡的平靜時光。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 33, category: "daily", title: "公園散步的一小時", content: "觀察城市動態的放鬆時間。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 34, category: "daily", title: "週末探店心得", content: "發現隱藏在巷弄的咖啡館。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 35, category: "daily", title: "日記的書寫藝術", content: "紀錄心情的療癒感。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 36, category: "daily", title: "斷捨離實踐紀錄", content: "清理房間等於清理心思。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 37, category: "daily", title: "一週買菜計畫", content: "健康飲食的自我掌控。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 38, category: "daily", title: "聽音樂的午後", content: "爵士樂與工作效率的關係。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 39, category: "daily", title: "瑜珈入門練習", content: "找回身體柔軟度的過程。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 40, category: "daily", title: "旅行的意義", content: "離開熟悉環境後的反思。", date: "2026-06-01", routeName: "coffveeeContent" },
  { id: 41, category: "decoration", title: "極簡居家空間佈局", content: "讓光影與家具對話的藝術。", date: "2026-06-01", routeName: "commondContent" },
  { id: 42, category: "decoration", title: "植物與居家色彩", content: "綠植如何改變室內氛圍。", date: "2026-06-01", routeName: "commondContent" },
  { id: 43, category: "decoration", title: "燈具選擇建議", content: "暖光與冷光的空間定義。", date: "2026-06-01", routeName: "commondContent" },
  { id: 44, category: "decoration", title: "牆面收納技巧", content: "不佔地的牆面空間利用。", date: "2026-06-01", routeName: "commondContent" },
  { id: 45, category: "decoration", title: "中古屋翻新筆記", content: "預算分配與優先順序。", date: "2026-06-01", routeName: "commondContent" },
  { id: 46, category: "decoration", title: "木質家具的保養", content: "延長木頭家具壽命的方法。", date: "2026-06-01", routeName: "commondContent" },
  { id: 47, category: "decoration", title: "開箱我的工作桌", content: "符合人體工學的桌椅配置。", date: "2026-06-01", routeName: "commondContent" },
  { id: 48, category: "decoration", title: "極簡主義收納書單", content: "改變環境的書籍推薦。", date: "2026-06-01", routeName: "commondContent" },
  { id: 49, category: "decoration", title: "自製簡約層架", content: "動手打造居家收納空間。", date: "2026-06-01", routeName: "commondContent" },
  { id: 50, category: "decoration", title: "色調搭配原則", content: "60-30-10 配色法在空間中的應用。", date: "2026-06-01", routeName: "commondContent" },
  { id: 51, category: "impressiveDrinks", title: "威士忌桶陳咖啡特調", content: "融合木質調與果酸的極致表現。", date: "2026-06-01", routeName: "commondContent" },
  { id: 52, category: "impressiveDrinks", title: "手沖與氣泡水混搭", content: "夏日清爽感咖啡特調。", date: "2026-06-01", routeName: "commondContent" },
  { id: 53, category: "impressiveDrinks", title: "椰香冷萃咖啡", content: "東南亞風情的咖啡實驗。", date: "2026-06-01", routeName: "commondContent" },
  { id: 54, category: "impressiveDrinks", title: "義式 Affogato 變體", content: "咖啡與冰淇淋的美味碰撞。", date: "2026-06-01", routeName: "commondContent" },
  { id: 55, category: "impressiveDrinks", title: "檸檬與濃縮咖啡", content: "經典羅馬咖啡的製作法。", date: "2026-06-01", routeName: "commondContent" },
  { id: 56, category: "impressiveDrinks", title: "蜂蜜肉桂拿鐵", content: "溫暖且層次豐富的特調。", date: "2026-06-01", routeName: "commondContent" },
  { id: 57, category: "impressiveDrinks", title: "自製咖啡利口酒", content: "適合週末小酌的咖啡飲品。", date: "2026-06-01", routeName: "commondContent" },
  { id: 58, category: "impressiveDrinks", title: "燕麥奶與咖啡比例", content: "口感與風味的黃金搭配。", date: "2026-06-01", routeName: "commondContent" },
  { id: 59, category: "impressiveDrinks", title: "熱紅酒咖啡實驗", content: "冬季限定的香料飲品。", date: "2026-06-01", routeName: "commondContent" },
  { id: 60, category: "impressiveDrinks", title: "抹茶咖啡分層", content: "如何做出完美的顏色分層。", date: "2026-06-01", routeName: "commondContent" }
];