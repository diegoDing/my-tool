import { createApp } from 'vue'
import router from "./plugin";
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})

const app=createApp(App)

app.use(vuetify)
app.use(router)

app
  .mount('#app')
  .$nextTick(() => {
      if (postMessage){
          postMessage({ payload: 'removeLoading' }, '*')
      }
  })
