<template>

  <div id="app">

    <Navbar/>

    <b-container >

      <transition name="fly"
                  mode="out-in">

        <!-- the main content of the page -->
        <router-view/>

      </transition>


    </b-container>

    <Footer/>

  </div>

</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
  /* global styles */
  body {
    background-color: hsla(195, 100%, 96%) !important;
  }


  card-title-tail {
    padding: 0px !important;
  }
  card-title-tail > div {
    background: gold;
    padding: 5px;
    display: inline-block;
    position: relative;
  }
  card-title-tail > div:after {
      content: "";
      position: absolute;
      right: -23px;
      top: 0px;
      border-top: 35px solid gold;
      border-right: 24px solid transparent;
  }

  .corner-callout {
    border-radius: 20px 0px 2px 0px !important;
    bottom: 0;
    right: 0;
    position: absolute;
  }
</style>

<style scoped>
  /* customize navbar */
  @import url('https://fonts.googleapis.com/css?family=Farsan');
  #app .bg-success {
    background-color:        #378d4b !important;
    border-bottom: 2px solid hsla(120, 57%, 31%);
  }
  #app .navbar-dark .navbar-brand {
    color: #f3d326;
    font-family: 'Farsan';
    font-size: 2em;
    font-weight: bold;
  }
  #app .navbar.fixed-bottom {
    font-size: .9em;
  }

  .navbar-expand-sm {
      justify-content: flex-start;
  }
  .navbar-brand {
      flex-grow: 1;
      text-align: center;
  }
  @media (min-width: 576px) {
      .navbar-brand {
        flex-grow: 0;
    }
  }


  .container {
      margin-top: 20px;
  }

  /* page transition animations */
  .fly-enter-active,
  .fly-leave-active {
    transition: opacity .3s ease, transform .3s ease;
  }
  .fly-enter,
  .fly-leave-active {
    opacity: 0;
    transform: translateX(-30%);
  }

</style>
