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
    entities: []
  },
  mutations: {
    setWorldData (state, { helps, players, rooms, items, entities }) {
      console.log(helps, entities, players, items, rooms)
      state.helpfiles = helps
      state.players = players
      state.rooms = rooms
      state.items = items
      state.entities = entities
      state.fetched = true
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

      function accumulateWorldData (worldData, response) {
        return Object.assign({}, worldData, response)
      }
    }
  }
})

export default store
