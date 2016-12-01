<template>
  <div id="app">
    <navigator></navigator>
    <terminal></terminal>
  </div>
</template>

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

<style>
#app {
  font-family: 'Share Tech Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
