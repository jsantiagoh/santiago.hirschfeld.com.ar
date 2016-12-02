export default {
  clear: function (cmd, params, terminal) {
    terminal.clear()
  },
  help: function (cmd, params, terminal) {
    terminal.output('commands: ' + Object.keys(this))
  }
}
