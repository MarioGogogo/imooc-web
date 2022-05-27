import store from '@/store'
import { watch } from 'vue'
import { THEME_LIGHT, THMEM_DARK, THEME_SYSTEM } from '@/constants'

// 初始主题
export default () => {
  watch(
    () => store.getters.themeType,
    (val) => {
      changeTheme(val)
    },
    {
      //初始化执行一次
      immediate: true,
    }
  )
}

// 监听系统主题变更
let matchMedia

const watchSystemThemeChange = () => {
  //初始化一次即可
  matchMedia = window.matchMedia('(prefers-color-scheme:dark)')
  //监听主题变更
  matchMedia.onchange = function () {
    changeTheme(THEME_SYSTEM)
  }
}

// 变更主题
const changeTheme = (theme) => {
  //html or class
  let themeClassName = ''
  switch (theme) {
    case THEME_LIGHT:
      themeClassName = theme
      break
    case THMEM_DARK:
      themeClassName = theme
      break
    case THEME_SYSTEM:
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
      break
  }
  console.log(
    '%c 🍿 准备初始主题颜色: ',
    'font-size:20px;background-color: #3F7CFF;color:#fff;',
    themeClassName
  )
  document.querySelector('html').className = themeClassName
}
