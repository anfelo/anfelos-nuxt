<template>
  <div class="container">
    <nav
      :class="`navbar ${isDark ? 'is-dark' : ''}`"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="/img/logo-orange.svg" height="28" alt="Anfelo Logo" />
          <span>anfelos</span>
        </nuxt-link>

        <span
          role="button"
          :class="`navbar-burger burger ${isNavbarOpen ? 'is-active' : ''}`"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
          @click="handleBurgerClick"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div
        id="mainNavbar"
        :class="`navbar-menu ${isNavbarOpen ? 'is-active' : ''}`"
      >
        <div class="navbar-end">
          <!-- <nuxt-link class="navbar-item" to="/about">
            about
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/work">
            work
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/blog">
            blog
          </nuxt-link> -->
          <div class="navbar-item has-dropdown is-hoverable">
            <ToggleSwitch
              :checked="isDark"
              :isThemeToggle="true"
              @change="handleThemeChange"
            />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ToggleSwitch from "@/components/ToggleSwitch.vue";
export default {
  props: {
    isDark: Boolean
  },
  components: {
    ToggleSwitch
  },
  data() {
    return {
      isNavbarOpen: false
    };
  },
  methods: {
    handleBurgerClick() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    handleThemeChange(event) {
      const newValue = event ? "dark-theme" : "light-theme";
      this.$store.commit("updateAppTheme", newValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/theme.scss";
.navbar-item {
  text-decoration: none;
  padding: 1em 0.5em 0;
  display: block;
}
.navbar-menu {
  .navbar-item.nuxt-link-exact-active::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: $link;
    display: block;
    bottom: -1px;
  }
}
.navbar-brand .navbar-item {
  display: flex;
  min-width: 120px;
}
.navbar-brand .navbar-item span {
  margin-left: 5px;
  font-family: menlo, inconsolata, monospace;
  font-weight: bold;
}
.navbar-icon {
  width: 25px;
  margin: auto;
  cursor: pointer;
}
@media (max-width: 768px) {
  .navbar-item {
    text-align: center;
  }
  .navbar-item.nuxt-link-exact-active::after {
    display: none;
  }
}
</style>
