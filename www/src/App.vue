<template>

  <div id="app">

    <b-navbar type="dark" variant="success" toggleable>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">Lawrence Debate Union</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/news">News</b-nav-item>
          <b-nav-item to="/events">Events</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <b-container >
      <transition name="fly"
                  mode="out-in">
        <router-view/>
      </transition>
    </b-container>

   <b-navbar type="dark" variant="dark" toggleable fixed="bottom">
      <b-nav-text >
        <div>
          Department phone number:
          <a target="_blank" href="tel:8027774517">
            (802) 777-4517
          </a>
        </div>
        <div>
          Huber House:
          <a target="_blank" href="https://www.google.com/maps/place/475+Main+St,+Winooski,+VT+05404/@44.476102,-73.2021954,17z/data=!3m1!4b1!4m5!3m4!1s0x4cca7a5af98f7247:0xc856ec7b4587c81f!8m2!3d44.476102!4d-73.2000121">
            475 Main St. Burlington, VT 05405
          </a>
        </div>

      </b-nav-text>
    </b-navbar>

  </div>

</template>

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
    border-radius: 20px 0px 2px 0px;
  }
</style>

<style scoped>
  /* customize navbar */
  @import url('https://fonts.googleapis.com/css?family=Farsan');
  #app .bg-success {
    background-color:        hsla(120, 35%, 57%);
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
