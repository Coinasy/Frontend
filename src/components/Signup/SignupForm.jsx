import React, { Component } from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import Validator from 'validator'

import './styles/SignupForm.scss'
class SignupForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
    errors: {},
  }

  validateForm(data) {
    let errors = {}
    let isValid = true

    if(Validator.isEmpty(data.username))
      errors.username = 'A username is required'
    if(Validator.isEmpty(data.password))
      errors.password = 'Password required to login'
    if(Validator.isEmpty(data.confirmPassword))
      errors.password = 'Please confirm your password'
    if(data.password.length < 6 )
      errors.password = 'Password size must be greater than 6.'
    if(data.password !== data.confirmPassword) {
      isValid = false
      errors.confirmPassword = "Passwords do not match."
    }
    if(errors.password || errors.username)
      isValid = false

    return {
      errors,
      isValid
    }
  }

  clearErrors = () => {
    this.setState({ errors: {} })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ isLoading: true })
    const { isValid, errors } = this.validateForm(this.state)
    if(isValid) {
      this.props.signup(this.state)
      .then(res => {
        console.log(res)
        this.context.router.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      this.setState({ errors, isLoading: false })
    }
  }

  render() {
    return (
      <div>
        <form className='signupForm' onSubmit={this.onSubmit}>
          <h1>Signup</h1>
          <span className='signupNames'>
            <span className='signupLabel'>
              <label>{this.state.errors.firstName}</label>
              <input
                name='firstName'
                type='text'
                placeholder='First Name'
                onChange={this.onChange}
                value={this.state.firstName}/>
            </span>
            <span className='signupLabel'>
              <label>{this.state.errors.lastName}</label>
              <input
                name='lastName'
                type='text'
                placeholder='Last Name'
                onChange={this.onChange}
                value={this.state.lastName}/>
            </span>
          </span>
          <br/>
          <div className='signupSingles'>
            <input
              name='username'
              type='text'
              placeholder='Username'
              onChange={this.onChange}
              value={this.state.username}/>
            <input
              name='email'
              type='email'
              placeholder='Email'
              onChange={this.onChange}
              value={this.state.email}/>
          </div>
          <br/>
          <div className='signupSingles'>
            <input
              name='password'
              type='password'
              placeholder='Password'
              onChange={this.onChange}
              value={this.state.password}/>
            <input
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              onChange={this.onChange}
              value={this.state.confirmPassword}/>
          </div>
          <br/>
          <button
            type='submit'>
            {this.state.isLoading ? <ThreeBounce color='white' size={18}/> : 'SIGNUP' }
          </button>
          <div className='mediaDivider'>
            <hr/><p>OR</p>
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm