import React, { Component } from 'react';
import 'styles/index.css'
import 'styles/variables.css'
import App from 'containers/app'
import HireMe from 'containers/app'
import Portfolio from 'containers/app'
import Error from 'containers/app'
import Timeline from 'containers/app'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={App} />
          <Route path='/hireme' component={HireMe} />
          <Route path='/timeline' component={Timeline} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/404' component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Entry;
