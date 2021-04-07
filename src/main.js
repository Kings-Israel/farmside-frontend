import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue} from 'bootstrap-vue'
import Vuesax from 'vuesax'
import VAnimateCss from 'v-animate-css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuesax/dist/vuesax.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'material-icons/iconfont/material-icons.css';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://farmside-functions.netlify.app/.netlify/functions'

library.add(faChevronCircleDown)
library.add(faInstagram)
library.add(faYoutube)
library.add(faTimes)
library.add(faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VAnimateCss)
Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
