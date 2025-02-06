<template>
  <div>
    <h3>Vue3 Pinia</h3>
    <div>目前在網站中流通的Key:{{ commonStore.common.key }}</div>
    <div>
      <input type="input" v-model="newkey" placeholder="請輸入新key" /><button
        @click="setNewKey"
      >
        設定新key
      </button>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { useCommonStore } from "@/stores/common";

export default defineComponent({
  setup() {
    const newkey = ref("");
    const commonStore = useCommonStore();
    const setNewKey = () => {
      commonStore.setKey(newkey.value);
    };
    return {
      setNewKey,
      newkey,
      commonStore,
    };
  },
});
</script>
