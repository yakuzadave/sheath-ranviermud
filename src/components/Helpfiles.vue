<template>
  <div class="helpfiles">
    <h1>Help Topics</h1>
    <h2>Click a Topic to see details</h2>
    <ul>
      <li v-for="help in helpfiles">
        <p>{{ help.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'helpfiles',

  data () {
    console.log(this.$store.state.helpfiles)
    return { helpfiles: this.$store.state.helpfiles }
  },

  mounted () {
    console.log('Help Component Mounted.')
    console.log(this.$store.state.helpfiles)
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
