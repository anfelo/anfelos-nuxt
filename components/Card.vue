<template>
  <div :class="`column ${size}`">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5">{{ entry.name }}</p>
          </div>
        </div>

        <div class="content is-small">{{ entry.description }}</div>
        <div class="columns">
          <div class="column is-10">
            <div class="tag-list">
              <span
                v-for="tag in filteredTags"
                :key="tag.name"
                class="tag"
                :style="
                  `color:${tag.color};background-color:${tag.backgroundColor}`
                "
              >
                {{ tag.name }}
              </span>
            </div>
          </div>
          <div class="column">
            <a :href="entry.url" target="_black">
              <span class="icon is-small">
                <i class="fas fa-link" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    entry: {
      type: Object,
      default: {}
    },
    size: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState(["tags"]),
    filteredTags() {
      return this.entry.topics
        ? this.tags.filter(tag =>
            this.entry.topics.some(topic => topic === tag.name)
          )
        : [];
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 250px;
}
.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
}
.tag-list .tag {
  margin-right: 2px;
  margin-bottom: 2px;
}
</style>
