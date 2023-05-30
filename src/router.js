import {createRouter, createWebHashHistory,} from 'vue-router'
import HomePage from './views/HomePage.vue'
import Contact from './views/Contact.vue'
import BinaryCon from './views/BinaryCon.vue'
import AboutPage from './views/AboutPage.vue'
import subnet from './views/subnet.vue'
import SecurityChecker from './views/SecurityChecker.vue'


const routes = [
{
 path: '/',
component:HomePage
},
{
 path:'/AboutPage',
component:
},
{
  path: '/BinaryCon',
 component:HomePage
 },
 {
  path:'/subnet',
 component:
 },
 {
  path: '/Contact',
 component:HomePage
 },
 {
  path:'/SecurityChecker',
 component:
 }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router