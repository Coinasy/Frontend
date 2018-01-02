import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import jwt from 'jsonwebtoken'

// User functions
import { setCurrentUser } from './actions/login.js'
import setAuthorizationToken from './api/setAuth'

// Redux
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'

// Import Components
import Navigation from './components/Navigation.jsx'
import HomeContainer from './components/HomeContainer.jsx'
import LoginContainer from './components/LoginContainer.jsx'
import SignupContainer from './components/SignupContainer.jsx'
import PoolContainer from './components/PoolContainer.jsx'

// Initialize Redux 
const store = createStore( // Make global store
  rootReducer,
  compose(
    applyMiddleware(thunk), // Apply promise middleware
    window.devToolsExtension ? window.devToolsExtension() : f => f // Allow chrome extension
  )
)

// Check for token, dispatch decoded token
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

// The main component which declares our routing rules using
// React Router v4's <Switch> component
class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <span>
            <Navigation />
            <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route path='/login' component={LoginContainer} />
              <Route path='/signup' component={SignupContainer} />
              <Route path='/pool' component={PoolContainer} />
              <Route path='/*' render={() => <h1>404 lol</h1>} />
            </Switch>
          </span>
        </Router>
      </Provider>
    )
  }
}

export default Routes