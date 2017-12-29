import React, { Component } from 'react'

import SignupForm from './Signup/SignupForm.jsx'

import './styles/SignupContainer.scss'
import bridgeSVG from '../images/camp.svg'

export default class SignupContainer extends Component {
  render() {
    return (
      <div className='container'>
        <span className='signupContent'>
          <div className='signupImageContainer'>
            <span className='campContainer'>
              <img src={bridgeSVG} alt=''/>
            </span>
          </div>
          <SignupForm />
        </span>
      </div>
    )
  }
}
