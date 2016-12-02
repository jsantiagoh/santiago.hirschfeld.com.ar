<template>
  <div class="prompt-input">
    <prompt />
    <form v-on:submit.prevent="onSubmit">
        <input type="text"
               v-focus
               v-model.trim="cmd" />
    </form>
  </div>
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
  flex-grow: 1;
}

.prompt-input {
  display: flex;
}

input {
  width: 100%;
  height: 1em;
  background: none;
  border: none;
  color: inherit;
  outline: none;
  font: inherit;
}
</style>
