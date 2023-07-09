<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import CarouselSlide from './CarouselSlide.vue'
// const slides = [1, 2]
const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const carouselWidth = ref(null)
const slideWidth = 50
const quantitySlides = ref(0)
const calculateMaxSlidesInCarousel = () => {
  quantitySlides.value = Math.round((carouselWidth?.value?.clientWidth - 154) / slideWidth)
  console.log('Calculated', quantitySlides.value, carouselWidth?.value?.clientWidth)
}
const slideInCarousel = computed(() => slides.slice(0, quantitySlides.value))
onMounted(() => {
  console.log('onMounted')
  calculateMaxSlidesInCarousel()
  window.addEventListener('resize', () => {
    console.log('Test', quantitySlides.value)
    calculateMaxSlidesInCarousel()
  })
}),
  onUnmounted(() => {
    window.removeEventListener('resize', calculateMaxSlidesInCarousel)
  })
</script>
<template>
  <div class="carousel d-flex align-center" ref="carouselWidth">
    <v-btn class="carousel_button-left">left</v-btn>
    <div class="carousel_slides d-flex w-100">
      <carousel-slide
        v-for="slide in slideInCarousel"
        :key="`key-${slide}`"
        :numberSlide="slide"
        ref="slideWidth"
      />
    </div>
    <v-btn class="carousel_button-right">right</v-btn>
  </div>
</template>
<style scoped lang="scss">
.carousel {
  &_button-left {
  }

  &_slides {
  }

  &_button-right {
  }
}
</style>
