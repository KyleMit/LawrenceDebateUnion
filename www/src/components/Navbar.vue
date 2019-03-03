<template>
    <b-navbar type="dark" variant="success" toggleable>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">
            <img src="../assets/logo.svg" alt="VT" class="logo">
            Lawrence Debate Union
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>

            <b-nav-item-dropdown text="Upcoming">
                <b-dropdown-item to="/events">Events</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Resources">
                <b-dropdown-item to="/news">News</b-dropdown-item>
                <b-dropdown-item :to="{name: 'videos'}">Videos</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item to="/contact">Contact</b-nav-item>

            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<style scoped>
    .logo {
        height: 50px;
    }
</style>