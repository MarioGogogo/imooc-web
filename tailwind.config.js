module.exports = {
  //手动切换暗黑模式
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.42rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem'],
      },
      boxShadow: {
        'l-white': '-10px 0 10px white',
        'l-zinc': '-10px 0 10px #18181b',
      },
      height: {
        header: '72px',
        main: 'calc(100vh - 72px)',
      },
      colors: {
        main: '#F5ABCD',
        'hover-main': '#F5AB',
        'success-100': '#f2f9ec',
        'success-200': '#e4f2db',
        'success-300': '#7ec050',
        'warn-100': '#FCF6ED',
        'warn-100': '#f8ecda',
        'warn-100': '#DCA550',
        'error-100': '#ED7456',
        'error-200': '#f3471c',
        'error-300': '#ffffff',
      },
    },
  },
  plugins: [],
}
