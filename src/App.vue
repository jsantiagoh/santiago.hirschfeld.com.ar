<template>
  <div id="app">
    <navigator></navigator>
    <terminal></terminal>
  </div>
</template>

<style>
#app {
  font-family: 'Share Tech Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    margin: 0px;
}
</style>

<script>
import Navigator from './components/Navigator'
import Terminal from './components/Terminal'

export default {
  name: 'app',
  components: {
    Navigator,
    Terminal
  }
}
</script>
