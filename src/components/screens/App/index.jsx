// Import this if using bootstrap js
// import 'bootstrap'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

import 'normalize.css/normalize.css'
import 'styles/App.sass'

import React from 'react'
import TopBar from 'components/layout/TopBar'
import SideBar from 'components/shared/SideBar'
import ContentWrapper from 'components/layout/ContentWrapper'


const MainContent = (props) => (
  <div id="wrapper">
    {props.children}
  </div>
)

const AppComponent = ({children}) => (
  <div>
    <TopBar title='Webapp'/>
    <MainContent>
      <SideBar />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </MainContent>
  </div>
)

export default AppComponent
