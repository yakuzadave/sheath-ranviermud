<template>
  <div class="hello">
    <h1>Items</h1>
    <h2>Click an Item to see details</h2>
    <ul>
      <li v-for="item in items">
        <router-link v-bind:to="'/items/' + item.uid"></router-link>
      </li>
    </ul>
    <button @click="fetch">Fetch</button>
  </div>
</template>

<script>

export default {
  name: 'items',
  data () {
    return { items: this.$store.state.items }
  },
  methods: {
    fetch () {
      this.$store.dispatch('fetchAll')
    }
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
