<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed: {
      // constantly checks for updates, without it this component would not grab the data
      loadedPosts() {
          return this.$store.getters.loadedPosts
      }
   },
}
</script>

<style scoped>
    .post-page {
        display: flex;
        justify-content: center;
        align-items: center;

    }

</style>