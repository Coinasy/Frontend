import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Navigation.scss'

class Navigation extends Component {
  render() {
    return (
      <div className='navigationContainer'>
        <span className='navigationContent'>
          <h1>Coinasy</h1>
          <span className='navigationLinkContainer'>
            <Link to='/login' className='navigationLink'>LOGIN</Link>
            <Link to='/signup' className='navigationLink'>SIGNUP</Link>
          </span>
        </span>
      </div>
    )
  }
}

export default Navigation
