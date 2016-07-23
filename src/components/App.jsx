// Import this if using bootstrap js
// import 'bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import 'normalize.css/normalize.css'
import 'styles/App.sass'

import React from 'react'
import TopBar from './layout/TopBar'
import SideBar from './layout/SideBar'
import ContentWrapper from './layout/ContentWrapper'
import Counter from './Counter'


const MainContent = (props) => (
  <div id="wrapper">
    {props.children}
  </div>
)

const AppComponent = () => (
  <div>
    <TopBar title='Horizon'/>
    <MainContent>
      <SideBar />
      <ContentWrapper>
        <Counter />
      </ContentWrapper>
    </MainContent>
  </div>
)

export default AppComponent
