import { createStore } from 'vuex'
import getters from './getters'
import categoryState from './modules/category'
const store = createStore({
  getters,
  modules: {
    categoryState,
  },
})

export default store
