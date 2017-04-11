<template>
  <div class="item-detail">
    <h1>{{ itemDefinition.name }}</h1>
    <h2>{{ removeAngles(itemDefinition.description) }}</h2>
    <p>Area: {{ itemDefinition.area.title }}</p>
    <p>Quality: {{ itemDefinition.quality }}</p>
    <p>Type: {{ itemType }}</p>
    <p v-if="itemProperties.length">Properties:</p>
    <ul v-if="itemProperties.length">
      <p v-for="property in itemProperties">{{property[0]}}: {{property[1]}} </p>
    </ul>
    <p>JSON: {{ itemDefinition }}</p>

  </div>
</template>

<script>

export default {
  name: 'items',

  data () {
    return {}
  },

  methods: {
    fetch () {
      this.$store.dispatch('fetchAll')
    },

    removeAngles (string) {
      return string.replace(/(<([^>]+)>)/ig, '').replace(/[<>]/g, '')
    }

  },

  computed: {
    itemDefinition () {
      return this.$store.state.items.find(item => item.id === Number(this.uid))
    },

    itemType () {
      return this.itemDefinition.type || 'Unknown'
    },

    itemProperties () {
      return Object.entries(this.itemDefinition.properties)
    }
  },
  props: ['uid']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
