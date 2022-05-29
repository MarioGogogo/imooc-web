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
    /**
      1.服务端获取数据 替换初始数据
      2.防止数据太老 我们每次获取新数据 作为下一次的初始化数据
     */
    setCategorys(state, newCategorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
    },
  },
  actions: {
    // 异步 获取categorys 自动保存vuex中
    async useFetchCategoryData(context) {
      if (localStorage.getItem('categorys')) {
        const categorys = localStorage.getItem('categorys')
        context.commit('setCategorys', JSON.parse(categorys))
      } else {
        const res = await fetchGetCategory()
        const { data, success } = res.data
        if (success && data.categorys) {
          const { categorys } = data
          localStorage.setItem('categorys', JSON.stringify(categorys))
          context.commit('setCategorys', categorys)
        } else {
          context.commit('setCategorys', [])
        }
      }
    },
  },
}
