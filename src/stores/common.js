import { ref } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const common = ref({
    key: "D41D8CD98F00B204E9800998ECF8427E",
  });
  function setKey(newkey) {
    common.value.key = newkey;
  }
  return { common, setKey };
});
