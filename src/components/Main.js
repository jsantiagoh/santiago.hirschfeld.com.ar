require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let logoImage = require('../images/logo.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={logoImage} alt="Horizon MCP" />
        <div className="notice">Working</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
