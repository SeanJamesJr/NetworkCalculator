import {createRouter, createWebHashHistory,} from 'vue-router'
import HomePage from './views/HomePage.vue'
import Contact from './views/Contact.vue'
import BinaryCon from './views/BinaryCon.vue'
import AboutPage from './views/AboutPage.vue'
import subnet from './views/subnet.vue'
import SecurityCheck from './views/SecurityCheck.vue'
import ipcheck from './views/ipcheck.vue'

const routes = [
{
 path: '/',
component:HomePage
},
{
 path:'/AboutPage',
component:AboutPage
},
{
  path: '/BinaryCon',
 component:BinaryCon
 },
 {
  path:'/subnet',
 component:subnet
 },
 {
  path: '/Contact',
 component:Contact
 },
 {
  path:'/SecurityCheck',
 component:SecurityCheck
 },
 {
  path:'/ipcheck',
 component:ipcheck
 }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router