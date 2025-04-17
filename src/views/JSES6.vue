<template>
  <div>
    <h1>JS ES6+常用操作</h1>
    <div>
      <h2>陣列元素操作</h2>
      serialNumber: <input v-model="serialNumber" /><br />
      count:
      <input v-model="count" /><br />
      <div></div>
      <button @click="addHandler" style="margin: 5px">新增</button>
      <button @click="modifyHandler" style="margin: 5px">修改</button>
      <h3>列表</h3>
      <div>list json:<br />{{ list }}</div>
      <div v-for="item in list" :key="item.serialNumber">
        <span>serialNumber:{{ item.serialNumber }},count:{{ item.count }}</span>
        <button
          style="margin-left: 5px; margin-bottom: 3px"
          @click="deleteHandler(item.serialNumber)"
        >
          刪除
        </button>
      </div>
      <br />
      <hr />
      <br />
      <h2>異步API操作</h2>
      <div>
        使用axios.js，並呼叫API1 API2 API3，並回傳資料。
        <br />需開啟F12開發者模式查看Network資料順序
      </div>
      <div>
        <h3>Promise.all:並發呼叫，同時啟動，呼叫順序不一致，較快</h3>
        <button @click="callAPIByPromiseAll">呼叫</button>
        <div v-html="callAPIByPromiseAllResultStr"></div>
      </div>
      <div>
        <h3>Await與Async:照順序呼叫，較慢</h3>
        <button @click="callAPIBySort">呼叫</button>
      </div>
      <div v-html="SortResultStr"></div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const serialNumber = ref(null);
    const count = ref(null);

    const deleteHandler = (delSerialNumber) => {
      if (!list.value.find((x) => x.serialNumber === delSerialNumber)) {
        alert("找不到serialNumber刪除");
        return;
      }
      list.value = list.value.filter((x) => x.serialNumber !== delSerialNumber);
    };
    const modifyHandler = () => {
      if (!list.value.find((x) => x.serialNumber === serialNumber.value)) {
        alert("找不到serialNumber做修改");
        return;
      }
      list.value.forEach((item) => {
        if (item.serialNumber === serialNumber.value) {
          item.count = count.value;
        }
      });
      serialNumber.value = null;
      count.value = null;
    };

    const addHandler = () => {
      if (list.value.find((x) => x.serialNumber === serialNumber.value)) {
        alert("已有相同serialNumber");
        return;
      }
      list.value = [
        ...list.value,
        {
          serialNumber: serialNumber.value,
          count: count.value,
        },
      ];
      serialNumber.value = null;
      count.value = null;
    };
    const list = ref([
      {
        serialNumber: "1",
        count: 5,
      },
      {
        serialNumber: "2",
        count: 3,
      },
    ]);

    const callAPIByPromiseAllResultStr = ref("");
    const callAPIByPromiseAll = async () => {
      await Promise.all([
        axios.get("/vue-exercise/API1.json"),
        axios.get("/vue-exercise/API2.json"),
        axios.get("/vue-exercise/API3.json"),
      ]).then(([response1, response2, response3]) => {
        const resultArray = [];
        resultArray.push(response1.data);
        resultArray.push(response2.data);
        resultArray.push(response3.data);
        callAPIByPromiseAllResultStr.value = processAPIVersionData(resultArray);
      });
    };

    const processAPIVersionData = (arr) => {
      let result = `一共呼叫${arr.length}隻API結果:<br/>`;
      arr.forEach((x) => {
        result += `名稱:${x.name},版本${x.version},JSON:${JSON.stringify(x)}。<br/>`;
      });
      return result;
    };

    const SortResultStr = ref("");

    const callAPIBySort = async () => {
      const response1 = await axios.get("/vue-exercise/API1.json");
      const response2 = await axios.get("/vue-exercise/API2.json");
      const response3 = await axios.get("/vue-exercise/API3.json");
      const resultArray = [];
      resultArray.push(response1.data);
      resultArray.push(response2.data);
      resultArray.push(response3.data);
      SortResultStr.value = processAPIVersionData(resultArray);
    };

    return {
      callAPIByPromiseAllResultStr,
      callAPIByPromiseAll,
      callAPIBySort,
      SortResultStr,
      list,
      serialNumber,
      count,
      addHandler,
      modifyHandler,
      deleteHandler,
      processAPIVersionData,
    };
  },
};
</script>
