import React from 'react'
import PromptPrefix from './PromptPrefix'

import './Prompt.scss'

class Prompt extends React.Component {
  constructor(props) {
    super(props)
    this.focus = props.focus
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.refs.input.focus();
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // invoke the given call to handle a submission
    this.setState({value: ''})
  }

  render() {
    return (
      <form className="prompt" onSubmit={this.handleSubmit}>
        <PromptPrefix />
        <input type="text"
               ref="input"
               value={this.state.value}
               onChange={this.handleChange}
               autoFocus={this.focus} />
      </form>
    )
  }
}

export default Prompt
