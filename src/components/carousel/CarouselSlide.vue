<script setup lang="ts">
// interface PropTypes {
//   numberSlide: number
// }
const props = defineProps({
  numberSlide: { type: Number, required: true }
})
</script>
<template>
  <a href="" class="slide d-flex align-center justify-center">
    <p>{{ props.numberSlide }}</p>
  </a>
</template>
<style>
.slide {
  border: solid;
  width: 50px;
  height: 50px;
}
</style>
