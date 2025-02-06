<template>
  <input
    type="number"
    v-model="formattedValue"
    @blur="onBlur"
    step="0.01"
    placeholder="請輸入數字"
  />
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    toFixed: {
      type: Number,
      default: 2,
    },
  },
  setup(props, { emit }) {
    const formattedValue = ref(props.value.toFixed(props.toFixed));
    const onBlur = () => {
      const validValue = parseFloat(formattedValue.value);
      if (!isNaN(validValue)) {
        formattedValue.value = validValue.toFixed(props.toFixed);
      }
      // 對外部發送數值
      emit("update", parseFloat(formattedValue.value));
    };

    watch(
      () => props.value,
      (newValue) => {
        formattedValue.value = newValue.toFixed(props.toFixed);
      },
    );

    return {
      formattedValue,
      onBlur,
    };
  },
};
</script>
