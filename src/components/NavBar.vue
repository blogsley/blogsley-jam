<template>
  <header>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <v-icon name="cloud-moon" scale="4"/>
          <span style="font-size: 1.5em">KFields</span>
        </router-link>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="burgerClick"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
        <div class="navbar-end">
      <div id="navbarBasicExample" class="navbar-menu" ref="navMenu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/blog">Blog</router-link>
          <router-link class="navbar-item" to="/projects">Projects</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/contact">Contact</router-link>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://github.com/kfields/kfields.netlify.com/issues">Report an issue</a>
        </div>

            <a class="navbar-item" href="https://github.com/kfields">
              <v-icon name="brands/github" scale="2"/>
            </a>
        </div>

      </div>
    </nav>
  </header>
</template>
<!--
<static-query>
query Home {
  metaData {
    siteName
  }
}
</static-query>
-->
<script>
import "vue-awesome/icons/brands/github";
import "vue-awesome/icons/cloud-moon";

export default {
  name: "NavBar",
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {
    burgerClick (event) {
      const el = event.currentTarget
      // Get the target from the "data-target" attribute
      // const target = el.dataset.target;
      //const $target = document.getElementById(target);
      const $target = this.$refs['navMenu']

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    }
  }
};
</script>
<style lang="scss">
.navbar, .navbar-menu.is-active {
  background-color: #18453B;
  color: #ffffff;
  // margin-bottom: 1em;
}

a.navbar-item {
  color: #ffffff;
}
a.navbar-item:hover {
  color: #18453B;
  // background-color: #ffffff;
}
</style>