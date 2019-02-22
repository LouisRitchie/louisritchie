import React, { Component } from 'react';
import 'styles/index.css'
import 'styles/variables.css'
import 'containers/app/styles.css'
import _Home from 'containers/home'
import _HireMe from 'containers/hireme'
import _Portfolio from 'containers/portfolio'
import _Error from 'containers/error'
import _Timeline from 'containers/timeline'
import TransitionContainer from 'containers/transitionContainer'
import Header from 'components/header'
import Footer from 'components/footer'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const Home = ({routeProps, ...props}) => <TransitionContainer {...props}><_Home {...routeProps} /></TransitionContainer>
const HireMe = ({routeProps, ...props}) => <TransitionContainer {...props}><_HireMe {...routeProps} /></TransitionContainer>
const Portfolio = ({routeProps, ...props}) => <TransitionContainer {...props}><_Portfolio {...routeProps} /></TransitionContainer>
const Error = ({routeProps, ...props}) => <TransitionContainer {...props}><_Error {...routeProps} /></TransitionContainer>
const Timeline = ({routeProps, ...props}) => <TransitionContainer {...props}><_Timeline {...routeProps} /></TransitionContainer>

class Entry extends Component {
  state = {
    lightsOn: true, // when lights off, opacity is 0.
    firstRender: true // helps with SSR to keep lights on for 1st render
  }

  _hitLightSwitch = () => this.setState({ lightsOn: !this.state.lightsOn, firstRender: false })

  render() {
    const { firstRender, lightsOn } = this.state

    const renderProps = {
      firstRender,
      hitLightSwitch: this._hitLightSwitch
    }

    console.log(lightsOn)

    return (
      <BrowserRouter>
        <div className="app">
          <Header />

          <div className={`container ${lightsOn ? 'lightsOn' : ''} ${window.location.pathname.split('/')[1]}Container`}>
            <Switch>
              <Route path='/' render={(routeProps) => <Home routeProps={routeProps} {...renderProps} />} />
              <Route path='/hireme' render={(routeProps) => <HireMe routeProps={routeProps} {...renderProps} />} />
              <Route path='/timeline' render={(routeProps) => <Timeline routeProps={routeProps} {...renderProps} />} />
              <Route path='/portfolio' render={(routeProps) => <Portfolio routeProps={routeProps} {...renderProps} />} />
              <Route path='/404' render={(routeProps) => <Error routeProps={routeProps} {...renderProps} />} />
              <Redirect from='/*' to='/404' />
            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Entry;
