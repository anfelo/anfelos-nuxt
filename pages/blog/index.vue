<template>
  <div class="container">
    <div class="select is-pulled-right">
      <select @change="event => handleFilterChange(event.target.value)">
        <option value="all">All</option>
        <option
          :value="topic"
          v-for="topic in Array.from(topics.values())"
          :key="topic"
          >{{ topic }}</option
        >
      </select>
    </div>
    <h5 class="title">Recent posts</h5>
    <ul>
      <li class="article" v-for="post in filteredPosts" :key="post.slug">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <ul class="topics-list">
                  <li
                    v-for="topic in post.topics"
                    :key="topic"
                    class="level-item topic-img"
                  >
                    <img :src="`/img/${topic}.svg`" alt="" />
                  </li>
                </ul>
                <span class="article-date">
                  {{ parseDate(post.publishedOn) }}
                </span>
                <h4 class="article-title title is-size-4">{{ post.title }}</h4>
                <p class="article-description">{{ post.short }}</p>
              </div>
              <nav class="level is-mobile">
                <div class="level-right">
                  <nuxt-link
                    class="button is-primary"
                    :to="`/blog/${post.slug}`"
                  >
                    <span>Continue reading</span>
                    <span class="icon is-small">
                      <i class="fas fa-arrow-right"></i>
                    </span>
                  </nuxt-link>
                </div>
              </nav>
            </div>
          </article>
        </div>
        <ul class="topics-list" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as fromParsers from "@/helpers/parsers";

export default {
  async asyncData({ store }) {
    await store.dispatch("getPostsData");
  },
  head() {
    return {
      title: "anfelos - blog"
    };
  },
  data() {
    return {
      filterBy: "all"
    };
  },
  methods: {
    handleFilterChange(value) {
      this.filterBy = value;
    },
    parseDate(date) {
      return fromParsers.parseDate(date);
    }
  },
  computed: {
    ...mapState(["posts"]),
    filteredPosts() {
      return this.filterBy === "all"
        ? this.posts
        : this.posts.filter(post => post.topics.includes(this.filterBy));
    },
    topics() {
      const topics = new Map();
      this.posts.forEach(post => {
        post.topics.forEach(topic => {
          topics.set(topic, topic);
        });
      });
      return topics;
    }
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
