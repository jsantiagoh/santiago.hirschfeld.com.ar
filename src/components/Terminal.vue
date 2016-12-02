<template>
  <div>
      <div v-for="item in history">
        <div class="prompt-line">
          <prompt v-if="item.in" />
          <span>{{ item.txt }}</span>
        </div>
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
        history: []
      }
    },
    methods: {
      onExecute (value) {
        this.input(value.cmd)
        this.handleCommand(value.cmd)
      },
      output (txt) {
        this.history.push({in: false, txt: txt})
      },
      input (txt) {
        this.history.push({in: true, txt: txt})
      },
      handleCommand (command) {
        if (!command) {
          return
        }
        let parts = command.split(' ')
        let cmd = parts[0]
        switch (cmd) {
          case 'clear':
            this.clearHistory()
            break
          case 'help':
            this.displayHelp()
            break
        }
      },
      displayHelp () {
        this.output('This is work in progress, stay tuned')
      },
      clearHistory () {
        this.history = []
      }
    }
}
</script>

<style>
  .prompt-line {
    display: flex;
  }
</style>
