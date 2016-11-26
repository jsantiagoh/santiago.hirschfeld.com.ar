// Import this if using bootstrap js
// import 'bootstrap'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

import 'normalize.css/normalize.css'
import 'styles/App.scss'

import React from 'react'
import { Link } from 'react-router'
import Clock from 'components/shared/Clock'

const Icon = ({ i, icon }) => (
  <div>
    <span className="number">{i}</span>
    <span className="icon"><i className={`fa fa-${icon}`} aria-hidden="true"></i></span>
  </div>
)

const InternalLinkButton = ({ i, to, icon }) => (
  <Link to={to}>
    <Icon i={i} icon={icon} />
  </Link>
)

const ExternalLinkButton = ({ i, to, icon }) => (
  <a href={to}>
    <Icon i={i} icon={icon} />
  </a>
)

const AppComponent = ({ children }) => (
  <div>
    <header>
      <links>
        <InternalLinkButton i="1" to="/" icon="home" />
        <InternalLinkButton i="2" to="/about" icon="user-circle" />
        <ExternalLinkButton i="3" to="https://github.com/jsantiagoh/" icon="github" />
        <ExternalLinkButton i="4" to="https://nl.linkedin.com/in/santiagohirschfeld" icon="linkedin-square" />
      </links>
      <items>
        <Clock />
      </items>
    </header>
    <section>
      {children || '~ >'}
    </section>
  </div>
);

AppComponent.propTypes = { children: React.PropTypes.object };

Icon.propTypes = {
  i: React.PropTypes.string,
  icon: React.PropTypes.string
};

InternalLinkButton.propTypes = {
  i: React.PropTypes.string,
  to: React.PropTypes.string,
  icon: React.PropTypes.string
};

ExternalLinkButton.propTypes = {
  i: React.PropTypes.string,
  to: React.PropTypes.string,
  icon: React.PropTypes.string
};

export default AppComponent
