<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import ProfileCard from './components/ProfileCard.vue'
import TrackingCard from './components/TrackingCard.vue'
import AppLoading from './components/AppLoading.vue'

import { Category } from './interfaces/category'
import apiData from './data/data.json'

const categories = ref<Category[]>([])
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    categories.value = apiData
    isLoading.value = false
  }, 2000)
})
</script>

<template>
  <app-loading v-if="isLoading" />

  <Transition>
    <main class="wrapper" v-if="!isLoading">
      <profile-card />
      <tracking-card v-for="item in categories" :data="item" />
    </main>
  </Transition>
</template>

<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1158px;
  padding: 5rem 1.5rem;
  margin: 0 auto;

  display: grid;
  align-items: stretch;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.875rem;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from {
  transform: translateX(-40px);
}

.v-leave-to {
  transform: translateX(0);
}
</style>
