import React from 'react'

import PromptPrefix from './PromptPrefix'
import Prompt from './Prompt'


class Terminal extends React.Component {
  constructor(props) {
    super(props)
    this.path = props.path
    let history = [
      { 'type' : 'in', 'txt' : 'echo hola' },
      { 'type' : 'out', 'txt': 'hola' }
    ]
    this.state = { 'history' : history }
  }

  render() {
    let history = []
    for(var i = 0; i < this.state.history.length; i++) {
      let history_item = this.state.history[i]
      let item
      if (history_item.type === 'in' ) {
        item = (<div key={i}>
                <PromptPrefix path={this.path} />
                <span>{history_item.txt}</span>
                </div>)
      } else {
        item = (<div key={i}>
                <span>{history_item.txt}</span>
                </div>)
      }
      history.push(item)
    }
    return (
      <div>
        {history}
        <Prompt path="{this.path}" />
      </div>
    )
  }
}

export default Terminal
