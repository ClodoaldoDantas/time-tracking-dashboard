<script lang="ts" setup>
import { useStore, MenuType } from '../store'

const store = useStore()

const menu = [
  { id: 'daily', label: 'Daily' },
  { id: 'weekly', label: 'Weekly' },
  { id: 'monthly', label: 'Monthly' },
]
</script>

<template>
  <section class="profile-card">
    <header class="profile-card__header">
      <img src="../assets/image-jeremy.png" alt="Jeremy Robson" />

      <div class="profile-card__content">
        <span>Report for</span>
        <h2>Jeremy Robson</h2>
      </div>
    </header>

    <nav class="profile-card__menu">
      <a
        href="#"
        v-for="menuItem in menu"
        :key="menuItem.id"
        :class="{ active: menuItem.id === store.activeMenu.value }"
        @click.prevent="store.setActiveMenu(menuItem.id as MenuType)"
      >
        {{ menuItem.label }}
      </a>
    </nav>
  </section>
</template>

<style lang="scss">
.profile-card {
  background-color: var(--blue-800);
  border-radius: 15px;

  @media only screen and (min-width: 768px) {
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 1200px) {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  &__header {
    background-color: var(--purple-600);
    border-radius: 15px;
    padding: 2rem;

    display: flex;
    align-items: center;
    gap: 1.25rem;

    @media only screen and (min-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;
      padding: 2.5rem 2rem 5rem;
    }

    img {
      height: 4rem;
      width: 4rem;
      border: 3px solid var(--white);
      border-radius: 50%;
      object-fit: cover;

      @media only screen and (min-width: 1200px) {
        height: 5rem;
        width: 5rem;
      }
    }
  }

  &__content {
    span {
      display: block;
      font-size: 0.9rem;
      color: var(--purple-300);
      margin-bottom: 0.25rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 300;

      @media only screen and (min-width: 1200px) {
        font-size: 2.5rem;
      }
    }
  }

  &__menu {
    padding: 1.5rem 0;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 1200px) {
      padding: 1.625rem 2rem 2rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }

    a {
      flex: 1;
      text-align: center;
      color: var(--purple-400);
      transition: color 0.2s;

      @media only screen and (min-width: 1200px) {
        flex: auto;
      }

      &:hover,
      &.active {
        color: var(--white);
      }
    }
  }
}
</style>
