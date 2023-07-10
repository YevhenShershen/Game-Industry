<script setup lang="ts">
// import Carousel from './components/carousel/Carousel.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
    <header-component />
  <!-- <main>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12"> <carousel /></v-col>
    </v-row>
  </main> -->
<div class="test w-100 text-center" ><h2 v-for="item in 100">{{ item }}</h2></div>
  <RouterView />
</template>

<style scoped>
.test{
  height: 9999px;
}
/*
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

} */
</style>
