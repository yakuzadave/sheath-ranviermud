import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fetched: false,
    helpfiles: [],
    players: [],
    areas: [], // TODO: Glom together areas based on rooms etc.
    rooms: [],
    items: [],
    entities: [],
    error: ''
  },
  mutations: {
    setWorldData (state, { helps, players, rooms, items, entities }) {
      state.helpfiles = helps
      state.players = players
      state.rooms = rooms
      state.items = items
      state.entities = entities
      state.fetched = true
      state.error = ''
    },

    setError (state, errorMessage) {
      const error = {
        'Failed to fetch': 'Failed to fetch world data. Are you sure that your Ranvier server is running, and that Sheath is pointing to the correct URL?'
      }[errorMessage]
      state.error = error
    }
  },
  actions: {
    fetchAll ({ commit }) {
      const baseUrl = 'http://localhost:9001/api/admin/'
      const endpoints = ['npcs', 'players', 'items', 'rooms', 'help']
      const fetchers = endpoints.map(endpoint => fetch(baseUrl + endpoint).then(res => res.json()))
      Promise.all(fetchers)
             .then(responses => responses.reduce(accumulateWorldData, {}))
             .then(worldData => commit('setWorldData', worldData))
             .catch(error => commit('setError', error.message))

      function accumulateWorldData (worldData, response) {
        return Object.assign({}, worldData, response)
      }
    }
  }
})

export default store
