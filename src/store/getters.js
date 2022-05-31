export default {
  //处理简单访问
  categorys: (state) => state.categoryState.categorys,
  themeType: (state) => state.themeState.themeType,
  /**
   * category选中项
   */
  currentCategory: (state) => state.appState.currentCategory,
  /**
   * category选中项下标
   */
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex(
      (item) => item.id === getters.currentCategory.id
    )
  },
  //搜索历史记录
  historys: (state) => state.searchState.historys,
}
