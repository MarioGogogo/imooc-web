import { THEME_LIGHT, THMEM_DARK, THEME_SYSTEM } from '@/constants'
export default {
  // 独立作用域
  namespaced: true,
  state: () => {
    return {
      themeType: THEME_LIGHT,
    }
  },
  mutations: {
    changeThemeType(state, newTheme) {
      state.themeType = newTheme
    },
  },
  actions: {},
}
