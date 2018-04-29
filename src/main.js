import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/index.styl'
import 'swiper/dist/css/swiper.css'
import './assets/style/iconfont/iconfont.css'
import VueSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
