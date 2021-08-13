<template>
  <div class="container">
    <h1 class="title">My Work</h1>
    <div class="tabs is-centered">
      <ul>
        <li :class="type === 'website' ? 'is-active' : ''">
          <a @click="() => changeType('website')">websites</a>
        </li>
        <li :class="type === 'webapp' ? 'is-active' : ''">
          <a @click="() => changeType('webapp')">webapps</a>
        </li>
        <li :class="type === 'api' ? 'is-active' : ''">
          <a @click="() => changeType('api')">apis</a>
        </li>
        <li :class="type === 'otherstuff' ? 'is-active' : ''">
          <a @click="() => changeType('otherstuff')">other stuff</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <CardList :entries="filteredProjects" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardList from "@/components/CardList.vue";

export default {
  components: {
    CardList
  },
  async asyncData({ store }) {
    await store.dispatch("getProjectsData");
  },
  head() {
    return {
      title: "anfelos - work"
    };
  },
  data() {
    return {
      type: "website"
    };
  },
  methods: {
    changeType(newType) {
      if (newType === this.type) return;
      this.type = newType;
    }
  },
  computed: {
    ...mapState(["projects"]),
    filteredProjects() {
      return this.projects.filter(entry => entry.type === this.type);
    }
  }
};
</script>

<style lang="scss" scoped></style>
