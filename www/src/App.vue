<template>

  <div id="app">

    <h1>Lawrence Debate Union</h1>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>

    <router-view/>

  </div>

</template>
