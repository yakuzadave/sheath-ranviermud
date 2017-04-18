<template>
  <div class="player-detail">
    <h1>{{ playerName }}</h1>
    <p>Level: {{playerDefinition.level}}</p>

    <p v-if="baseAttributes.length">Base Attributes:</p>
    <ul v-if="baseAttributes.length">
      <li v-for="attr in baseAttributes">{{attr[0]}}: {{attr[1].base}} </li>
    </ul>
    <p v-if="derivedAttributes.length">Derived Attributes:</p>
    <ul v-if="derivedAttributes.length">
      <li v-for="attr in derivedAttributes">{{attr[0]}}: {{attr[1].base}} </li>
    </ul>
    <p v-if="playerEffects.length">Current Effects:</p>
    <ul v-if="playerEffects.length">
      <li v-for="eff in playerEffects">{{getEffectName(eff)}}: {{getEffectDuration(eff)}} </li>
    </ul>
    <p>JSON: {{ playerDefinition }}</p>
  </div>
</template>

<script>

export default {
  name: 'player',

  data () {
    return { derived: ['armor', 'physical', 'mental', 'energy'] }
  },

  methods: {
    getEffectName (eff) {
      return eff.config.name
    },
    getEffectDuration (eff) {
      return eff.config.duration === 'inf' ? 'Permanent' : eff.config.duration
    }
  },

  computed: {
    playerDefinition () {
      return this.$store.state.players.find(player => player.name === this.playerName)
    },

    playerAttributes () {
      return Object.entries(this.playerDefinition.attributes)
    },

    baseAttributes () {
      return this.playerAttributes.filter(([attr, _]) => !this.derived.includes(attr))
    },

    derivedAttributes () {
      return this.playerAttributes.filter(([attr, _]) => this.derived.includes(attr))
    },

    playerEffects () {
      return this.playerDefinition.effects
    }
  },

  props: ['playerName']
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
