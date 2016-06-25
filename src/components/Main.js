import 'normalize.css/normalize.css'
import 'styles/App.css'

import React from 'react'
import NavigationBar from './NavigationBar'
import SideBar from './SideBar'
import Content from './Content'

const AppComponent = () => (
  <div>
    <NavigationBar title='Horizon MCP'/>
    <div id="wrapper">
      <SideBar />
      <Content />
    </div>
  </div>
)

AppComponent.defaultProps = {
}

export default AppComponent
