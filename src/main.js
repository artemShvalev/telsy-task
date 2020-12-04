import Vue from 'vue';
import VueModal from '@kouts/vue-modal';
import '@kouts/vue-modal/dist/vue-modal.css';
import App from './App.vue';

Vue.use(VueModal);
Vue.component('Modal', VueModal);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
