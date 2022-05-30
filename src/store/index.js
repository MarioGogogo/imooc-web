import { createStore } from 'vuex'
import getters from './getters'
import categoryState from './modules/category'
import themeState from './modules/theme'
import appState from './modules/app'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
  getters,
  modules: {
    categoryState,
    themeState,
    appState,
  },
  plugins: [
    createPersistedState({
      key: 'imooc-front',
      paths: ['category', 'themeType'],
    }),
  ],
})

export default store
