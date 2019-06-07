import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/danielletest/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {}

  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },

  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('')
        commit('setBugs', res.data.results)
      } catch (err) { console.error(err) }
    },
    createBug({ commit, dispatch }, payload) {
      try {
        _api.post('', payload)
          .then(res => {
            console.log(res)
            dispatch('getDays')
          })
      } catch (err) { console.error(err) }
    }
  }
})
