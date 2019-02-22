import React, { Component } from 'react';
import 'styles/index.css'
import 'styles/variables.css'
import App from 'containers/app'
import { BrowserRouter } from 'react-router-dom'

class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

export default Entry;
