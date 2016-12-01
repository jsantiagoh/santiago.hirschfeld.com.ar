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
      console.log(this.cmd)
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
  // border: 1px dotted #999;
  background: none;
  border: none;
  color: inherit;
  outline: none;
  font: inherit;
}
</style>
