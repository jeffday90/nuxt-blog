<template>
    <section class="post">
      <PostPreview 
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://www.biznews.com/wp-content/uploads/2018/05/generic_technology_imagery.jpg"
        title="Hello there"
        previewText="this is my first post"/>
      <PostPreview       
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://www.biznews.com/wp-content/uploads/2018/05/generic_technology_imagery.jpg"
        title="Hello there, the second time"
        previewText="this is my second post"/>
      <PostPreview 
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://www.biznews.com/wp-content/uploads/2018/05/generic_technology_imagery.jpg"
        title="Hi this is my third"
        previewText="this is my third post"/>
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
      isAdmin: Boolean,
      default: false,
  }
}
</script>

<style scoped>
    .post {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }   
</style>