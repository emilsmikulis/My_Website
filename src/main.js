import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import lv from './locales/lv.json'

const app = createApp(App)

const i18n = createI18n({
    legacy: false,
    locale: 'lv', // noklusējuma valoda
    messages: {
      en,
      lv
    }
  })
app.use(router)

app.use(i18n)
app.mount('#app')
