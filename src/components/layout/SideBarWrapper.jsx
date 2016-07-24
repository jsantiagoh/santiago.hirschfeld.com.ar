import React from 'react'

import './Layout.sass'

class SideBarWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      children : props.children.map( (c, i) => <li key={i}>{c}</li> )
    }
  }

  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {this.state.children}
        </ul>
      </div>
    )
  }
}

export default SideBarWrapper
