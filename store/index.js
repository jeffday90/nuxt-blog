import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post){
                state.loadedPosts.push(post)

            },
            editPost(state, editedPost ) {
                const postIndex = state.loadedPosts.findIndex(post => {
                    post.id === editedPost
                })
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            // same context you get in fetch
            // initialize the store
            nuxtServerInit (vuexContext, context) {
                // logically you would think to put the code for server/database access here

                // special method provided automatically which indicates whether the process is on the client
                // if it is not on the client, then the code should execute
                    return axios.get('https://nuxt-blog-dd6bf.firebaseio.com/posts.json')
                        .then(res => {
                            const postsArr = [];
                            for (const key in res.data) {
                                postsArr.push({...res.data[key], id: key})
                            }
                            vuexContext.commit('setPosts', postsArr)
                        })
                        .catch(e => context.error(e))
                },
            setPosts(vuexContext, posts) {
                // commit a mutation
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post){
                // access this object from multiple points
                const createdPost = {
                    ...post, 
                    updatedDate: new Date()
                  }
                return axios.post('https://nuxt-blog-dd6bf.firebaseio.com/posts.json', createdPost)  
                    .then(result => {
                        // commit the add post with the id that is given 
                        //from firebase, makes sure you don't lose it
                        vuexContext.commit('addPost', {...createdPost, id: result.data.name});
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost){
                return axios.put(`https://nuxt-blog-dd6bf.firebaseio.com/posts/${editedPost.id}.json`, editedPost)
                    .then(res => {
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e => context.error(e))
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        },
    })
}

export default createStore