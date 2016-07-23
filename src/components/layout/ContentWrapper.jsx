import React from 'react'

import './Layout.sass'

const ContentWrapper = (props) => (
      <div id="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {props.children}
          </div>
        </div>
      </div>
    </div>
)


export default ContentWrapper
