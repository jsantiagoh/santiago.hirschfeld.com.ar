<template>
  <div class="terminal">
      <div v-for="item in history">
        <div class="prompt-line">
          <prompt v-if="item.in" />
          <span>{{ item.txt }}</span>
        </div>
      </div>
    <prompt-input v-on:exec="onExecute" />
  </div>
</template>

<style>
.prompt-line {
  display: flex;
}

.terminal {
  padding: 5px;
}
</style>

<script>
  import PromptInput from './PromptInput.vue'
  import Prompt from './Prompt.vue'
  import commands from './commands.js'

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
        let params = parts.slice(1, parts.length)
        if (commands[cmd]) {
          commands[cmd](cmd, params, this)
        } else {
          this.output(`${cmd}: unknown command, try 'help'`)
        }
      },
      clear () {
        this.history = []
      }
    }
}
</script>
