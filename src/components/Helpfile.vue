<template>
  <div class="help-detail">
    <h1>{{ helpDefinition.name }}</h1>
    <h2 class="help-body">{{ removeAngles(helpDefinition.body) }}</h2>
    <p v-if="helpDefinition.command">command: {{ helpDefinition.command }}</p>
    <p>bundle: {{ bundle }}</p>
    <p v-if="related.length">Related:</p>
    <ul v-if="related.length">
      <li v-for="helpTopic in related">{{ helpTopic }}</li>
    </ul>
    <p>JSON: {{ helpDefinition }}</p>
  </div>
</template>

<script>

export default {
  name: 'helpfile',

  data () {
    return {}
  },

  methods: {
    removeAngles (string) {
      return string.replace(/(<([^>]+)>)/ig, '').replace(/[<>]/g, '')
    }
  },

  computed: {
    helpDefinition () {
      return this.$store.state.helpfiles.find(help => help.name === this.filename && help.bundle === this.bundle)
    },

    related () { // TODO: Do some voodoo to make these linkable by getting the bundle and such.
      return this.helpDefinition.related
    }
  },
  props: ['bundle', 'filename']
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
