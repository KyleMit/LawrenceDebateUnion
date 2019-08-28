import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import Events from './views/Events.vue';
import News from './views/News.vue';
import Videos from './views/Videos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },
  ],
});
