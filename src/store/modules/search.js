export default {
  namespaced: true,
  state: () => ({
    historys: [],
  }),
  mutations: {
    // 新增 1.不可重复 2.元素排在最前面
    addHistory(state, newHistory) {
      const isFindIndex = state.historys.findIndex(
        (item) => item === newHistory
      )
      if (isFindIndex != -1) {
        state.historys.splice(isFindIndex, 1)
      }
      state.historys.push(newHistory)
    },
    // 单个删除
    deleteHistory(state, index) {
      state.historys.splice(index, 1)
    },
    // 全部删除
    deleteAllHistory(state) {
      state.historys = []
    },
  },
}
