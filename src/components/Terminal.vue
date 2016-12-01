<template>
  <div>
    <div v-for="item in history">
      <prompt v-if="item.in" />
      {{ item.txt }}
    </div>
    <prompt-input v-on:exec="onExecute" />
  </div>
</template>

<script>
import PromptInput from './PromptInput.vue'
import Prompt from './Prompt.vue'

export default {
  name: 'terminal',
  components: {
    Prompt,
    PromptInput
  },
  data () {
    return {
      history: [
        { in: true, txt: 'echo hola' },
        { in: false, txt: 'hola' }
      ]
    }
  },
  methods: {
    onExecute (value) {
      this.history.push({in: true, txt: value.cmd})
    }
  }
}
</script>

<style>
</style>
