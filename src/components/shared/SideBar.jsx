import React from 'react'
import { Link } from 'react-router'

import SideBarWrapper from 'components/layout/SideBarWrapper'

const SideBar = () => (
  <SideBarWrapper>
    <Link to="/">Home</Link>
    <Link to="/counter">Counter</Link>
  </SideBarWrapper>
)

export default SideBar
