import { createApp } from 'vue'
import App from './App.vue'
import {createRouter} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'



const router = createRouter({
history: createWebHistory(),
routes:[
 {path:'/',name:'Home',componenet:Home},
 {path:'/about',name:'About',componenet:About}
]

})

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})



createApp(App)
.use(vuetify)
.use(router)
.mount('#app')