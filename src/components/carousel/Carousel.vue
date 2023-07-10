<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import CarouselSlide from './CarouselSlide.vue'
//CONST
const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const slideWidth = 50
//REF
const carouselWidth = ref(null)
const quantitySlides = ref(0)

//COMPUTED

const startSlide = ref(0)
const endSlide = ref(0)
const slideInCarousel = computed(() => slides.slice(startSlide.value, endSlide.value))
//METHODS
const calculateMaxSlidesInCarousel = () => {
  //у нас старт сладер остается например 7 а эн слайдер 6
  quantitySlides.value = Math.round((carouselWidth?.value?.clientWidth - 160) / slideWidth)
  if (quantitySlides.value < slides.length - 1) {
    endSlide.value = quantitySlides.value
    return
  }
  endSlide.value = slides.length
}
const nextSlides = () => {
  if (endSlide.value + quantitySlides.value > slides.length) {
    endSlide.value = slides.length
    startSlide.value = slides.length - quantitySlides.value
  } else {
    startSlide.value += quantitySlides.value
    endSlide.value += quantitySlides.value
  }
}
const previousSlides = () => {
  if (startSlide.value - quantitySlides.value < 0) {
    startSlide.value = 0
    endSlide.value = quantitySlides.value
  } else {
    startSlide.value -= quantitySlides.value
    endSlide.value -= quantitySlides.value
  }
}
//HOOKS
onMounted(() => {
  calculateMaxSlidesInCarousel()
  window.addEventListener('resize', calculateMaxSlidesInCarousel)
}),
  onUnmounted(() => {
    window.removeEventListener('resize', calculateMaxSlidesInCarousel)
  })
</script>
<template>
  <div class="carousel d-flex align-center" ref="carouselWidth">
    <!-- {{ startSlide }}==={{ endSlide }}==={{ quantitySlides }} -->
    <v-btn class="carousel_button-left" @click="previousSlides()">left</v-btn>
    <div class="carousel_slides d-flex justify-space-around w-100">
      <carousel-slide
        v-for="slide in slideInCarousel"
        :key="`key-${slide}`"
        :numberSlide="slide"
        ref="slideWidth"
      />
    </div>
    <v-btn class="carousel_button-right" @click="nextSlides()">right</v-btn>
  </div>
  <div>{{ quantitySlides }}</div>
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
