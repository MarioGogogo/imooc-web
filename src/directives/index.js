import lazyImg from './modules/lazy'

export default {
  install(app) {
    const directives = import.meta.globEager('./modules/*.js')
    for (const [key, value] of Object.entries(directives)) {
      const arr = key.split('/')
      const directivesName = arr[arr.length - 1].replace('.js', '')
      app.directive(directivesName, value.default)
    }
  },
}
