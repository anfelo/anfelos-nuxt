<template>
  <div>
    All snippets
    <ul>
      <li v-for="snippet in snippets" :key="snippet.slug">
        <nuxt-link :to="`/snippets/${snippet.slug}`">
          {{ snippet.slug }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["snippets"])
  }
};
</script>

<style lang="scss" scoped></style>
