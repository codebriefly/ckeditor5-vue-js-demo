import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';

// CKEditor 5
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor )

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
