<template>
  <div class="players">
    <h1>Players</h1>
    <h2>Click a Player to see details</h2>
    <ul>
      <li v-for="player in players">
        <router-link v-bind:to="`/players/${player.name}`">{{ player.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'players',

  data () {
    return { players: this.$store.state.players }
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
