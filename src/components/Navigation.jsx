import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import setAuthorizationToken from '../api/setAuth'

import {logout} from '../actions/login'

import './styles/Navigation.scss'

class Navigation extends Component {
  render() {
    return (
      <div className='navigationContainer'>
        <span className='navigationContent'>
          <Link to='/' style={{textDecoration: 'none'}}><h1>Coinasy</h1></Link>
          <AuthRoute />
        </span>
      </div>
    )
  }
}

const AuthRoute = withRouter(() => {
  return localStorage.jwtToken ? (
    <span className='navigationLinkContainer'>
      <Link to='/pool' className='navigationLink'>{localStorage.firstname.toUpperCase()}</Link>
      <Link to='/' onClick={logout()} className='navigationLink'>LOGOUT</Link>
    </span>
  ) : (
    <span className='navigationLinkContainer'>
      <Link to='/login' className='navigationLink'>LOGIN</Link>
      <Link to='/signup' className='navigationLink'>SIGNUP</Link>
    </span>
  )
})

export default Navigation
