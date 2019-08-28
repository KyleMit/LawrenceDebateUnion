# Lawrence Debate Union

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6cd1aba-79fc-476a-92d8-c5f7634b910d/deploy-status)](https://app.netlify.com/sites/ldu/deploys)

## Dependencies

* [Vue 2.6](https://vuejs.org/)
* [Vue CLI 3](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)
* [Vue Router](https://router.vuejs.org/)
* [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Bootstrap Vue](https://bootstrap-vue.js.org/)
* [gh-pages](https://www.npmjs.com/package/gh-pages)

## Project Setup

### Global - One Time Setup

```bash
npm install -g @vue/cli
npm install
```

### Project - One Time Setup

```bash
npm install gh-pages --save-dev
npm install bootstrap-vue --save
npm install bootstrap --save
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

Test Build Locally with [live-server](https://www.npmjs.com/package/live-server) & [http-proxy-cli](https://www.npmjs.com/package/http-proxy-cli):

```bash
live-server --host=localhost --port=8080
http-proxy /LawrenceDebateUnion=localhost:8080
start http://localhost:8000/LawrenceDebateUnion/
```

## Linting

```bash
npm run lint --fix
```

## Todo

* [x] Vue CLI 3 Init
* [x] Add gh-pages build process
* [x] Scaffold Pages
* [x] Add Bootstrap
* [x] Add Page Transitions
* [x] Add custom styles
* [x] Navbar dropdowns
* [ ] Markdown-based content
* [ ] Full Text Search
* [ ] Users Stories / Journey Mapping / Information Hierarchy
  * Who is coming to the site?  What are they looking to do?  Is it easy to do that thing?
* [ ] Page Content
* [ ] Card Component Wrapper
* [ ] Build process with color theming
* [ ] Store Copy (probably markdown) on Database
* [ ] User Log-in (enables role based access)
* [ ] Inline copy editing


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
* [History Mode](https://router.vuejs.org/guide/essentials/history-mode.html)

### WebPack

* [ES Lint Linebreaks](https://stackoverflow.com/a/44662845/1366033)
* [Static Asset - Relative Path Imports via File Loader](https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling)

### Vue-Markdown

* [Syntax Demo](https://miaolz123.github.io/vue-markdown/)
* [Register the VueMarkdown component as a global component](https://github.com/miaolz123/vue-markdown/issues/61)
### Netlify

* [Deploying Vue CLI to Netlify](https://cli.vuejs.org/guide/deployment.html#netlify)
* [Index Redirects](https://www.netlify.com/docs/redirects/#rewrites-and-proxying)