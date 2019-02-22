import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from 'components/header'
import Footer from 'components/footer'
import routes from '../../routes.js'
import TransitionContainer from 'containers/transitionContainer'
import './styles.css'

class App extends Component {
  state = {
    lightsOn: true, // when lights off, opacity is 0.
    firstRender: true
  }

  _hitLightSwitch = () => this.setState({ lightsOn: !this.state.lightsOn })

  componentDidMount() {
    this.setState({ firstRender: false })
  }

  render() {
    const { firstRender, lightsOn } = this.state

    return (
      <div className="app">
        <Header />

        <div className={`container ${lightsOn ? 'lightsOn' : ''} ${window.location.pathname.split('/')[1]}Container`}>
          <Switch>
            {routes.map(({component: Component, name, path, regex}) => (
              <Route exact key={path} path={regex} render={(props) => (
                <TransitionContainer hitLightSwitch={this._hitLightSwitch} firstRender={firstRender} match={props.match}>
                  <Component {...props} />
                </TransitionContainer>
              )} />
            ))}
            <Redirect from='/*' to='/404' />
          </Switch>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App
