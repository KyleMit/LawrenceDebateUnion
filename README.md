# LawrenceDebateUnion

## Dependencies

* [Vue 2.6](https://vuejs.org/)
* [Vue CLI 3](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)
* [Vue Router](https://router.vuejs.org/)
* [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Bootstrap Vue](https://bootstrap-vue.js.org/)
* [gh-pages](https://www.npmjs.com/package/gh-pages)

## Project Setup

**Global - One Time Setup**

```bash
npm install -g @vue/cli
npm install
cd www
```

**Project - One Time Setup**

```bash
vue create www
cd www
npm install gh-pages --save-dev
npm install bootstrap-vue --save
npm install bootstrap --save
```

### Compiles and hot-reloads for development

```bash
cd www
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

Test Locally with [live-server](https://www.npmjs.com/package/live-server):

```bash
cd dist
live-server
```

## Linting

```bash
npm run lint --fix
```

## Todo

[x] Vue CLI 3 Init
[x] Add gh-pages build process
[x] Scaffold Pages
[x] Add Bootstrap
[x] Add Page Transitions
[x] Add custom styles
[x] Navbar dropdowns
[ ] Page Content
[ ] Card Component Wrapper
[ ] Build process with color themeing


## Resources

### Vue CLI

* [Vue CLI Config - `publicPath`](https://cli.vuejs.org/config/#publicpath)
* [Vue CLI Environment Variables](https://cli.vuejs.org/guide/mode-and-env.html#modes)

### Bootstrap Vue

* [Navbar](https://bootstrap-vue.js.org/docs/components/navbar)
* [Router Link Support](https://bootstrap-vue.js.org/docs/reference/router-links/)
* [Router Link Active Style](https://stackoverflow.com/questions/46083220/how-to-vuejs-router-link-active-style)

### Vue Router

* [Router Transitions](https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition)
* [Router Transitions Demo](https://markus.oberlehner.net/blog/vue-router-page-transitions/)
