<template>
  <div>
    <AppNavbar :isDark="appTheme === 'dark-theme'" />
    <main :class="appTheme === 'dark-theme' ? 'has-background-dark' : ''">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import * as fromLocalStorage from "@/services/localStorage";

export default {
  components: {
    AppNavbar,
    AppFooter
  },
  mounted() {
    const theme = fromLocalStorage.loadEntry("theme");
    if (theme) {
      this.$store.commit("updateAppTheme", theme);
    }
  },
  computed: {
    ...mapState(["appTheme"])
  },
  watch: {
    appTheme: function(value) {
      fromLocalStorage.saveEntry({ key: "theme", value: value });
      if (document) {
        document.body.className = "";
        document.body.classList.add(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  max-width: 56em;
  background-color: white;
  padding: 2em;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
