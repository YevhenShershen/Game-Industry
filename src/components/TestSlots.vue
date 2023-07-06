<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="block">
    <h1 class="block_title">{{ msg }} 123</h1>
    <slot></slot>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn size="x-small">Extra small Button123</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.block {
  &_title {
    color: red;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
