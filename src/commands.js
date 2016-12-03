const commands = {
  clear: function (cmd, params, terminal) {
    terminal.clear()
  },
  help: function (cmd, params, terminal) {
    terminal.output('Welcome to my personal sandbox')
    terminal.output(`commands: ${Object.keys(this)}`)
  },
  about: function (cmd, params, terminal) {
    terminal.output('name: Santiago Hirschfeld')
  }
}

export default commands
