<script setup lang="ts">
import { computed } from 'vue'
import { Category } from '../interfaces/category'
import { useStore } from '../store'

interface Props {
  data: Category
}

const { data } = defineProps<Props>()
const { activeMenu } = useStore()

const getImage = (id: string) => `./assets/icon-${id}.svg`

const getLabel = (value: number) => `${value}${value === 1 ? 'h' : 'hrs'}`

const currentHours = computed(() => {
  return getLabel(data.timeframes[activeMenu.value].current)
})

const previousHours = computed(() => {
  return getLabel(data.timeframes[activeMenu.value].previous)
})
</script>

<template>
  <div class="tracking-card">
    <div class="tracking-card__hero" :class="data.id">
      <img :src="getImage(data.id)" alt="" />
    </div>

    <div class="tracking-card__content">
      <header class="tracking-card__header">
        <strong>{{ data.title }}</strong>

        <button type="button" aria-label="Open Menu">
          <img src="../assets/icon-ellipsis.svg" alt="" />
        </button>
      </header>

      <div class="tracking-card__hours">
        <p>{{ currentHours }}</p>
        <span>Last Week - {{ previousHours }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tracking-card {
  display: flex;
  flex-direction: column;

  &__hero {
    height: 2.5rem;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
    position: relative;

    @media only screen and (min-width: 1200px) {
      height: 2.75rem;
    }

    &.work {
      background-color: var(--orange-500);
    }

    &.play {
      background-color: var(--blue-500);
    }

    &.study {
      background-color: var(--pink-500);
    }

    &.exercise {
      background-color: var(--green-500);
    }

    &.social {
      background-color: var(--purple-500);
    }

    &.self-care {
      background-color: var(--yellow-500);
    }

    img {
      position: absolute;
      right: 16px;
      top: -10px;
    }
  }

  &__content {
    background-color: var(--blue-800);
    border-radius: 0 0 15px 15px;
    padding: 1.75rem 1.5rem;

    @media only screen and (min-width: 1200px) {
      flex: 1;
      padding: 1.75rem 1.875rem 2rem;
    }
  }

  &__header,
  &__hours {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__header {
    margin-bottom: 0.375rem;

    @media only screen and (min-width: 1200px) {
      margin-bottom: 1.5rem;
    }

    strong {
      font-size: 1.125rem;
      font-weight: 500;
    }

    button {
      line-height: 0;
      height: 1.5rem;
      width: 1.5rem;
      background-color: transparent;
      border: 0;
    }
  }

  &__hours {
    @media only screen and (min-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.5rem;
    }

    p {
      font-weight: 300;
      font-size: 2rem;

      @media only screen and (min-width: 1200px) {
        font-size: 3.5rem;
      }
    }

    span {
      font-size: 0.9rem;
      color: var(--purple-300);

      @media only screen and (min-width: 1200px) {
        font-size: 1rem;
      }
    }
  }
}
</style>
