import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import Events from './views/Events.vue';
import News from './views/News.vue';

Vue.use(Router);

export default new Router({
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
  ],
});
