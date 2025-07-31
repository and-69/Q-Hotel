import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Quasar, Dialog } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { router } from './routes/routes.js'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Dialog
  }
})
myApp.use(router)
myApp.mount('#app')
