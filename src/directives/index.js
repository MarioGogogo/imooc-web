import lazyImg from './modules/lazyImg'

export default {
  install(app) {
    app.directive('lazy', lazyImg)
  },
}
