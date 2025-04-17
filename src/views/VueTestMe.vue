<template>
  <div>
    VueTestMe
    <div>陣列操作</div>
    <ul>
      <li v-for="item in todolist" :key="item.id">
        {{ item.id }}-{{ item.name }}
      </li>
    </ul>
    <button @click="deleteId1()">刪除id為1</button>
    <button @click="foreachAll()">遍歷</button>
    <div>垂直置中</div>
    <div
      style="
        background: black;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div style="background: white">123</div>
    </div>
    <div>GRID操作</div>
    <div
      style="display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 80px 20px"
    >
      <div style="background: red">grid1</div>
      <div style="background: yellow">grid2</div>
      <div style="background: blue">grid3</div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const todolist = ref([
      { id: "1", name: "100" },
      { id: "2", name: "300" },
    ]);
    const deleteId1 = () => {
      todolist.value = todolist.value.filter((x) => x.id != 1);
      alert("刪除!");
    };
    const foreachAll = () => {
      let res = "";
      todolist.value.forEach((x) => {
        res += JSON.stringify(x);
      });
      alert(res);
    };
    return {
      todolist,
      deleteId1,
      foreachAll,
    };
  },
};
</script>
