<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  asyncData(context){
      return new Promise ((resolve, reject) => {
        resolve({
        loadedPosts: [
          {
            id: '32423', 
            title: 'new post',
            previewText: 'preview text for a new post',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_RbXp2Yd-pGCDVJPLPdP_VtkZaDNMvXw3a5ZyAm9x5vc9OpZ&s'
          }, 
          {
            id: '2342', 
            title: 'newer post',
            previewText: 'preview text for a newer post',
            thumbnail: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F0%2F9%2F0%2F3%2F21543090-1-eng-GB%2FHUAWEI%20TECH-USA_CHIP-CATCHUP20190704010111116_Data_2048x1152.jpg?source=nar-cms'
          }, 
        ]
        });
      })
      .then(data => {return data})
      .catch(err => {context.error(new Error)})
      
  },
  components: {
    PostList
  }
}
</script>

<style scoped>
    .post-page {
        display: flex;
        justify-content: center;
        align-items: center;

    }

</style>