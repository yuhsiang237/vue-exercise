<template>
  <div>這裡是子頁面2之內容，網址傳入的id為:{{ id }}</div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute(); // 取得當前路由的狀態
    const id = route.query.id; // 取得查詢參數 `id`
    return {
      id,
    };
  },
};
</script>
