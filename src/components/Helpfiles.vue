<template>
  <div class="helpfiles">
    <h1>Help Topics</h1>
    <h2>Click a Topic to see details</h2>
    <ul>
      <li v-for="help in helpfiles">
        <router-link v-bind:to="`/helpfiles/${help.bundle}/${help.name}`">{{ help.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'helpfiles',

  data () {
    return { helpfiles: this.$store.state.helpfiles }
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
