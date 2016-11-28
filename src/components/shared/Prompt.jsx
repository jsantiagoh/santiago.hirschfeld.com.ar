import React from 'react'

import './Prompt.scss'

const Prompt = ({ path }) => (
  <div className="prompt">
    <span className="path">{path}</span>
    <span className="separator"> > </span>
  </div>
)

const Cursor = () => (
  <span className="cursor">_</span>
)

class PromptEntry extends React.Component {
  constructor(props) {
    super(props)
    this.focus = props.focus
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log('value submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="prompt-entry">
        <form className="prompt" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus={this.focus} />
        </form>
      </div>
    )
  }
}

const PromptLine = ({ path }) => (
    <div className="prompt-line">
      <Prompt path={path} />
      <PromptEntry focus={true} />
      <Cursor />
    </div>
)

export default PromptLine
