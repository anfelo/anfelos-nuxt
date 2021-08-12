<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <div class="tag-list">
          <span
            v-for="tag in tags"
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
        <div class="picture-container">
          <img :src="bio.avatarUrl" alt="Anfelo Profile Pic" />
        </div>
        <h1 class="title">About Me</h1>
        <p>{{ bio.bio }}</p>
      </div>
    </div>
    <div class="contact-info">
      <h1 class="is-size-4">Lets have a coffee</h1>
      <p>- af.osorio1341@gmail.com</p>
    </div>
    <p class="is-size-6">* A virtual coffee works this days *</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: "anfelos - about"
    };
  },
  computed: {
    ...mapState(["bio", "tags"])
  }
};
</script>

<style lang="scss" scoped>
.picture-container {
  max-width: 150px;
  float: left;
  margin-right: 15px;
}
.picture-container img {
  width: 100%;
}
.contact-info h1,
.contact-info p {
  display: inline;
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
}
.tag-list .tag {
  margin-right: 2px;
  margin-bottom: 2px;
}
@media (max-width: 876px) {
  .picture-container {
    max-width: 50%;
    min-width: 200px;
    margin: auto;
    float: none;
  }
}
</style>
