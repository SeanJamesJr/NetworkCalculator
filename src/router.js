import {createRouter, createWebHashHistory,} from 'vue-router'
import HomePage from './views/HomePage.vue'
import BinaryCon from './views/BinaryCon.vue'
import subnet from './views/subnet.vue'
import SecurityCheck from './views/SecurityCheck.vue'
import Encoder from './views/Encoder.vue'

const routes = [
{
 path: '/',
component:HomePage
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
  path:'/SecurityCheck',
 component:SecurityCheck
 },
 {
  path:'/Encoder',
 component:Encoder
 }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router