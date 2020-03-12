import Vue from 'vue';
import VueRouter from 'vue-router';
import { loadState } from '../vue-apollo'
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  { path: '/blog', component: () => import('../views/Blog.vue'), props: true },
  { path: '/blog/:slug', component: () => import('../templates/Post.vue'), props: true },
  { path: '/contact', component: () => import('../views/Contact.vue'), props: true },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
/*
router.beforeResolve((to, from, next) => {
  loadState();
  next()
});
*/

router.beforeEach((to, from, next) => {
  if(process.env.NODE_ENV === 'development' || navigator.userAgent === 'ReactSnap') {
    return next();
  }
  console.log('toPath')
  console.log(to.fullPath)
  const statePath: string = to.fullPath === '/' ?  `${window.location.origin}/index.json` : to.fullPath + '/index.json';
  console.log('statePath')
  console.log(statePath)

  // const statePath: string = to.fullPath;
  fetch(statePath)
  .then((response) => {
    return response.json();
  })
  .then((state) => {
    console.log()
    console.log(state);
    if (
      Object.keys(state).length !== 0
    ) {
      Object.assign(window, state)
    }

    loadState();
    next();
  }).catch(function (error) {
    console.log(error)
    loadState();
    next();
  });
});

export default router;
