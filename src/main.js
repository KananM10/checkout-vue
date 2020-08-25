import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Checkout from './components/Checkout'
import Data from './components/Data'
import VueResource from 'vue-resource';

// Vue.config.productionTip = false


Vue.use(VueResource);

Vue.http.options.root = 'https://checkout-vue-5fdf5.firebaseio.com/';


const routes = [
	{ path: '/', component: Checkout  },
	{ path: '/data', component: Data}
]

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
