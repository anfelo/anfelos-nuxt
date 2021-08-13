<template>
  <div class="container">
    <div class="article">
      <ul class="topics-list">
        <li v-for="topic in currentPost.topics" :key="topic" class="topic-img">
          <img :src="`/img/${topic}.svg`" alt="" />
        </li>
      </ul>
      <span class="article-date">{{ parseDate(currentPost.publishedOn) }}</span>
      <h2 class="article-title title">{{ currentPost.title }}</h2>
      <div class="article-content">
        <Markdown :markdown="currentPost.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Markdown from "@/components/Markdown.vue";
import * as fromParsers from "@/helpers/parsers";

export default {
  components: {
    Markdown
  },
  async asyncData({ params, store }) {
    const slug = params.slug;
    await store.dispatch("getPostData", slug);
    return { slug };
  },
  head() {
    return {
      title: this.currentPost.title
    };
  },
  methods: {
    parseDate(date) {
      return date ? fromParsers.parseDate(date) : "";
    }
  },
  computed: {
    ...mapState(["currentPost"])
  }
};
</script>

<style lang="scss" scoped>
.article {
  margin-bottom: 25px;
}
.article .article-date {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
}
.topics-list {
  display: flex;
  margin: 0;
  list-style: none;
  align-items: center;
}
.topics-list .topic-img {
  width: 20px;
  margin: 0 5px 0 0;
}
.topic-img img {
  width: 100%;
}
</style>
