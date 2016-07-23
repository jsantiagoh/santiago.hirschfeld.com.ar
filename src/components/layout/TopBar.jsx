import React from 'react'

import './Layout.sass'

const TopBarHeader = (props) => (
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <a className="navbar-brand" href="#">{props.title}</a>
  </div>
)

const TopRightNavigation = (props) => {
  const children = props.children.map( (c,i) => <li key={i}>{c}</li> )
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1 ">
      <ul className="nav navbar-nav pull-right">
        {children}
      </ul>
    </div>
  )
}

const TopBar = (props) => (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <TopBarHeader title={props.title} />
      <TopRightNavigation>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </TopRightNavigation>
    </div>
  </nav>
)

export default TopBar
