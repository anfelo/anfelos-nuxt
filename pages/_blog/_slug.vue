<template>
  <div>
    <h1>This is {{ slug }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  }
};
</script>

<style lang="scss" scoped></style>
