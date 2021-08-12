<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Andres Osorio</h1>
          <p class="subtitle">
            Entrepreneur ● Software Engineer ● Home Barista
          </p>
          <nuxt-link
            to="/about"
            class="button button-callout is-link slide-left"
          >
            lets have a coffee
          </nuxt-link>
        </div>
      </div>
    </section>
    <Orbits />
  </div>
</template>

<script>
import Orbits from "@/components/Orbits.vue";

export default {
  components: {
    Orbits
  }
};
</script>

<style lang="scss" scoped>
.hero {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
