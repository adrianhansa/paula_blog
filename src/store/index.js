import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        '0001': {
          title: 'Travelling to Llandudno',
          content: 'it was lovely there',
          published: false,
          created_at: 111111111111,
          updated_at: 111111111111,
          author_id: 1
        },
        '102': {
          title: 'Back to work',
          content: 'a lot to be done',
          published: false,
          created_at: 111111111111,
          updated_at: 111111111111,
          author_id: 1
        },
        '103': {
          title: 'Autumn in Newsham Park',
          content: 'All leaves were brown and red',
          published: false,
          created_at: 111111111111,
          updated_at: 111111111111,
          author_id: 1
        }
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    posts(state) {
      return state.posts
    }
  },
  modules: {
  }
})
