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