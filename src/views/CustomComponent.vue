<template>
  <div>
    <h1>客製化元件</h1>
    <div>
      浮點數2位的元件FormattedInput:<br />
      <FormattedInput :value="num" :toFixed="2" @update="updateNum" />
      數值結果:{{ num }}
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import FormattedInput from "../components/FormattedInput.vue";
export default {
  components: {
    FormattedInput,
  },
  setup() {
    const num = ref(0);

    const updateNum = (newValue) => {
      num.value = newValue;
    };
    return {
      num,
      updateNum,
    };
  },
};
</script>
