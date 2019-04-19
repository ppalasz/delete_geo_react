import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MetaTags from 'react-meta-tags';

import Start from './subpages/Start.js';

class AppRouter extends Component {
  render() {
    return (
      <React.Fragment>
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="" />
            <meta property="og:title" content="" />
            <meta property="og:image" content="" />
          </MetaTags>


      <Router>
        <div>
          <Route exact path="/" component={Start}/>          
        </div>
      </Router>
      </React.Fragment>
    );
  }
}

export default AppRouter;
