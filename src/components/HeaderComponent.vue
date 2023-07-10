<script setup lang="ts">
import { RouterLink } from 'vue-router'
const headerNavigation = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/news',
    name: 'news'
  },
  {
    path: '/new-games',
    name: 'new games'
  },
  {
    path: '/popular-games',
    name: 'popular games'
  }
]
</script>
<template>
  <header class="header">
    <div class="header_container d-flex justify-space-between align-center h-100">
      <span class="header_logo">GAME INDUSTRY</span>
      <div class="header_search-input"></div>
      <nav class="header_navigation d-flex justify-space-around">
        <v-btn>Search</v-btn>
        <RouterLink v-for="nav in headerNavigation" :to="nav.path" class="header_navigation-item">{{
          nav.name.toUpperCase()
        }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  box-sizing: border-box;
  padding: 0;
  margin: 16px;
  height: 100px;
  border-radius: 20px;
  background: rgba(40, 45, 67, 0.8);
  backdrop-filter: blur(20px);
  opacity: 0.8;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
  &_container {
    margin: 0 16px;
  }

  &_logo {
  }

  &_navigation {
  }
  &_navigation-item {
    padding: 16px;
    border-radius: 8px;
    &:hover {
      background: rgba(34, 45, 67, 0.8);
    }
  }
}
.w-100 {
}
.d-flex {
}
.justify-space-between {
}
</style>
