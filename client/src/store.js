import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'



const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/danielletest/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: []

  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },

    setBug(state, payload = []) {
      state.bug = payload
    }

  },



  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('')
        commit('setBugs', res.data.results)
      }
      catch (err) { console.error(err) }
    },

    async getBugById({ commit, dispatch }, id) {
      try {
        let res = await _api.get(id)
        commit('setBug', res.data.results)
      }
      catch (err) { console.error(err) }
    },

    createBug({ commit, dispatch }, payload) {
      try {
        _api.post('', payload)
          .then(res => {
            dispatch('getBugs')
          })
      }
      catch (err) { console.error(err) }
    },
    //i have no idea what to do here...
    createNote({ commit, dispatch }, payload) {
      try {
        _api.post('', payload)
          .then(res => {
            dispatch('getNotes')
          })
      }
      catch (err) { console.error(err) }
    },



  }
})
