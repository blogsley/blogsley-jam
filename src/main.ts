import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import Buefy from 'buefy'
import './assets/index.scss'

import DefaultLayout from './layouts/Default.vue'
import NavBar from './components/NavBar.vue'
import FootBar from './components/FootBar.vue'
import ArticlePreview from './components/ArticlePreview.vue'
import Articles from './components/Articles.vue'
import ProjectPreview from './components/ProjectPreview.vue'
import Projects from './components/Projects.vue'
import Fluid from './components/Fluid.vue'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.config.productionTip = false;

Vue.use(Buefy)
Vue.component('Layout', DefaultLayout)
Vue.component('NavBar', NavBar)
Vue.component('FootBar', FootBar)
Vue.component('ArticlePreview', ArticlePreview)
Vue.component('Articles', Articles)
Vue.component('ProjectPreview', ProjectPreview)
Vue.component('Projects', Projects)
Vue.component('v-icon', Icon)
Vue.component('Fluid', Fluid)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
