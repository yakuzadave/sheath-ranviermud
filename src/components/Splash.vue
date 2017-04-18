<template>
  <div class="hello">
    <h1>Sheath</h1>
    <h2>Ranvier Dashboard</h2>
    <ul>
      <li><router-link to="/players">Players</router-link></li>
      <li><router-link to="/items">Items</router-link></li>
      <li><router-link to="/helpfiles">Help</router-link></li>
    </ul>
    <h2 v-if="error">{{error}}</h2>
    <button @click="fetch">Fetch</button>
  </div>
</template>

<script>
// TODO: Fetch Api stuff on load if it isn't in the store. Set up polling to fetch every so often.
// TODO: Show loading screen during fetch.
// TODO: Nav bar component.
export default {
  name: 'splash',

  data () {
    return { }
  },

  methods: {
    fetch () {
      this.$store.dispatch('fetchAll')
      console.log(this.$store.state)
    }
  },

  computed: {
    error () {
      return this.$store.state.error || ''
    }
  },

  mounted () {
    this.fetch()
    console.log('Fetched.')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
