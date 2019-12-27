import Vuex from 'vuex';

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
                if (!process.client) {
                    console.log(context.req)
                }

                return new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      vuexContext.commit('setPosts', [
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
                      ]);
                      resolve();
                    }, 1000);
                  });
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