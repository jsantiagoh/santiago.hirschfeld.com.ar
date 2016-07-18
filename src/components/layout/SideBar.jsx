import React from 'react'

import './Layout.sass'

class CoolSideBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      children : props.children.map( (c) => <li>{c}</li> )
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

const SideBar = () => (
  <CoolSideBar>
      <a href="#">Home</a>
      <a href="#">Tracking</a>
  </CoolSideBar>
)

export default SideBar
