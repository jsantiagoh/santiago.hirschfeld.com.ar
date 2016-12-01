<template>
  <form v-on:submit.prevent="onSubmit">
      <prompt />
      <input type="text"
             v-focus
             v-model.trim="cmd" />
  </form>
</template>

<script>
import Prompt from './Prompt.vue'

export default {
  name: 'prompt-input',
  components: {
    Prompt
  },
  data () {
    return {
      cmd: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('exec', { cmd: this.cmd })
      this.cmd = ''
    }
  }
}
</script>

<style>
form {
  display: flex;
}

input {
  flex-grow: 1;

  height: 1em;
  background: none;
  border: none;
  color: inherit;
  outline: none;
  font: inherit;
}
</style>
