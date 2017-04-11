<template>
  <div class="item-detail">
    <h1>{{ itemDefinition.name }}</h1>
    <h2>{{ removeAngles(itemDefinition.description) }}</h2>
    <p>Area: {{ itemDefinition.area.title }}</p>
    <p>Quality: {{ itemDefinition.quality }}</p>
    <p>Type: {{ itemType }}</p>
    <p v-if="itemProperties.length">Properties:</p>
    <ul v-if="itemProperties.length">
      <li v-for="property in itemProperties">{{property[0]}}: {{property[1]}} </li>
    </ul>
    <ul v-if="itemBehaviors.length">
      <li v-for="behavior in itemBehaviors">{{behavior[0]}}: {{behavior[1]}} </li>
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
      return this.$store.state.items.find(item => item.entityReference === this.entityReference)
    },

    itemType () {
      const item = this.itemDefinition
      const properties = item.properties || {}
      const stats = properties && properties.stats || {}
      switch (true) {
        case (Reflect.has(stats, 'armor')):
          return 'Armor'
        case (Reflect.has(properties, 'maxDamage')):
          return 'Weapon'
        case !!item.inventory:
          return 'Container'
        case (item.keywords.includes('resource')):
          return 'Crafting Resource'
        case (item.keywords.includes('potion')):
          return 'Potion'
        default:
          return 'Unknown'
      }
    },

    itemProperties () {
      return Object.entries(this.itemDefinition.properties)
    },

    itemBehaviors () {
      return Object.entries(this.itemDefinition.behaviors)
    }
  },
  props: ['entityReference']
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
