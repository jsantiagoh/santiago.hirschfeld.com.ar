export default {
  clear: function (cmd, params, terminal) {
    terminal.clear()
  },
  help: function (cmd, params, terminal) {
    terminal.output('This is in progress')
  }
}
