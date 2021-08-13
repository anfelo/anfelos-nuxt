<template>
  <div class="snippet-container">
    <Markdown :markdown="currentSnippet.content" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Markdown from "@/components/Markdown.vue";

export default {
  components: {
    Markdown
  },
  layout: "fullscreen",
  async asyncData({ params, store }) {
    const slug = params.slug;
    await store.dispatch("getSnippetData", slug);
    return { slug };
  },
  computed: {
    ...mapState(["currentSnippet"])
  }
};
</script>

<style lang="scss" scoped>
.snippet-container {
  width: 100%;
  overflow: auto;
}
</style>
