<script setup lang="ts">
// interface PropTypes {
//   numberSlide: number
// }
const props = defineProps({
  numberSlide: { type: Number, required: true }
})
</script>
<template>
  <div class="slide">
    <a href=""
      ><p>{{ props.numberSlide }}</p></a
    >
  </div>
</template>
<style>
.slide {
  border: solid;
  width: 50px;
  height: 50px;
}
</style>
