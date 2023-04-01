import { ref } from 'vue'

export type MenuType = 'daily' | 'weekly' | 'monthly'

const activeMenu = ref<MenuType>('weekly')

const setActiveMenu = (selectedMenu: MenuType) => {
  activeMenu.value = selectedMenu
}

export function useStore() {
  return {
    activeMenu,
    setActiveMenu,
  }
}
