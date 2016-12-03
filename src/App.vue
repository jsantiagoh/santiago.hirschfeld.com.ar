<template>
  <div id="app">
    <navigator></navigator>
    <terminal v-bind:commands="commands"></terminal>
  </div>
</template>

<style lang="scss">
@import "components/colors";

#app {
  font-family: 'Share Tech Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
  background-color: $color-bg;
}
</style>

<script>
import Navigator from './components/Navigator'
import Terminal from './components/Terminal'

import commandList from './commands'

export default {
  name: 'app',
  components: {
    Navigator,
    Terminal
  },
  data () {
    return {
      'commands': commandList
    }
  }
}
</script>
