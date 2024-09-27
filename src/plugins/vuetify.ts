// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Vuetify configuration
export default createVuetify({
  components: {
    ...components,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#FFD400',
          secondary: '#6F5F5E',
          'black-sand': '#594C4B',
          'grey-400': '#7B7B7B',
          'yellow-50': '#FFFBE6',
          'maroon-grey-800': '#2C2626',
          'inska-grey-400': '#888888',
          'inska-grey-300': '#A4A8AD',
          'maroon-grey-200': '#DEDEDE',
          'maroon-grey-100': '#F5F5F5',
          blue: '#1094FB',
          background: '#FAFCFF',
          'background-overlay': '#000000',
          success: '#1AAA55',
          error: '#DB3B21',
          warning: '#FC9403',
          'light-grey': '#FBFBFB',
          'light-red': '#FEEAEA',
          'light-yellow': '#FFF5C2',
          'light-green': '#D6F3C4',
          'light-blue': '#EFF5FF',
        },
      },
    },
  },
})
