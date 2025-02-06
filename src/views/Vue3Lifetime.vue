<!-- https://cn.vuejs.org/api/composition-api-lifecycle.html -->
<template>
  <div>
    <h1>Vue3 生命週期</h1>
    紀錄較常用之生命週期，在此頁面請打開F12查看console.log確認<br />
    其餘更多生命週期函數可參考:<a
      href="https://cn.vuejs.org/api/composition-api-lifecycle.html"
      >https://cn.vuejs.org/api/composition-api-lifecycle.html</a
    >
    <h2>onMounted</h2>
    <div>DOM已渲染到網頁上，主要用於呼叫非同步與初始化資料的區段</div>
    <h2>onBeforeUnmount</h2>
    <div>主要用在組建卸載前</div>
    <h2>onUnmounted</h2>
    <div>主要用在組建卸載後的後續動作</div>
  </div>
</template>
<script>
import { onMounted, onBeforeUnmount, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log("Component mounted");
    });
    onBeforeUnmount(() => {
      console.log("Component is about to be onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("Component is about to be onUnmounted");
    });
  },
};
</script>
