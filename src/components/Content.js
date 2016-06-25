import React from 'react'

const Content = () => (
      <div id="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1>Horizon Content</h1>
            <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>

            <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a>
          </div>
        </div>
      </div>
    </div>
)


export default Content
