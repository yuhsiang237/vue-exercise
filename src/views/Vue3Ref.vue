<!-- Vue3響應式核心基礎操作
https://cn.vuejs.org/api/reactivity-core.html
-->
<template>
  <div>
    <h1>Vue3響應式核心基礎操作</h1>
    <div>主要為操作ref之響應式操作</div>
    <h2>1.ref操作響應式變數</h2>
    <div>
      ref用於單一值，若為物件建議可用reactive，差別在不用.value去取值設定<br/>
      點擊按鈕，數值會+1
    </div>
    a : {{ count.counter.current }}<br/>
    <button @click="countHandler">+1</button>
    <h2>2.reactive操作響應式變數</h2>
    <div>reactive用於多層物件，與ref差別在不用.value去取值設定<br/>
      點擊按鈕，數值會+1
    </div>
    b : {{ count2.counter.current }}<br/>

    <button @click="count2Handler">+1</button>
    <h2>3.computed複合數值計算</h2>
    <div>
      用於複合數值組合計算，通常用來只讀，亦可改寫成getter/setter，以上為上面a及b兩個數值的總和
    </div>
    <div>
      <b>sum count:{{ sumCount }}</b>
    </div>
    <h2>4.watch 監聽變數</h2>
    <div>監聽變數變化並做出判斷方案</div>
    <div>當sum count為3的倍數時會顯示是3的倍數</div>
    <div>
      檢測sum count是否是三的倍數:
      <span v-if="isThree"> 是 </span>
      <span v-else> 否 </span>
    </div>
    <h2>5.v-for操作印陣列物件</h2>
    <div>印出list資料的內容，用v-for</div>
    {{ list }}
    <div>
      <div v-for="(item, index) in list" :key="item">
        {{ index + 1 }}.{{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  setup() {
    // 1.ref操作響應式變數
    const count = ref({
      counter: {
        current: 0,
      },
    });
    const countHandler = () => {
      count.value.counter.current = count.value.counter.current + 1;
    };
    // 2.reactive
    const count2 = reactive({
      counter: {
        current: 0,
      },
    });
    const count2Handler = () => {
      count2.counter.current = count2.counter.current + 1;
    };
    // 3.computed 用於複合型數值計算
    const sumCount = computed(() => {
      return count2.counter.current + count.value.counter.current;
    });
    // 4.watch 監聽變數變化並做出判斷方案
    const isThree = ref(false);
    watch(sumCount, (now, prev) => {
      if (now % 3 === 0 && now > 0) {
        isThree.value = true;
      } else {
        isThree.value = false;
      }
      console.log("now,prev", now, prev);
    });

    // 5. v-for陣列操作
    const list = ref([
      {
        name: "num1",
      },
      {
        name: "num2",
      },
    ]);

    return {
      list,
      isThree,
      sumCount,
      count,
      countHandler,
      count2,
      count2Handler,
    };
  },
};
</script>
