// 共享navigationbar中的数据
import { ALL_CATEGORY_ITEM } from '@/constants'
import { fetchGetCategory } from '@/api/category.js'
export default {
  // 独立作用域
  namespaced: true,
  state: () => {
    return {
      categorys: [],
    }
  },
  mutations: {
    // 赋值
    setCategorys(state, newCategorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
    },
  },
  actions: {
    // 异步 获取categorys 自动保存vuex中
    async useFetchCategoryData(context) {
      const res = await fetchGetCategory()
      const { results, success } = res.data
      if (success && results[0]) {
        const { categorys } = results[0]
        context.commit('setCategorys', categorys)
      } else {
        context.commit('setCategorys', [])
      }
    },
  },
}
