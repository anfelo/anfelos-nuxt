<template>
  <div class="card-list">
    <Card size="is-4" v-for="entry in entries" :key="entry.id" :entry="entry" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  props: {
    entries: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
