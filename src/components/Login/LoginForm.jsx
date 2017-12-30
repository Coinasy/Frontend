import React, { Component } from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import './styles/LoginForm.scss'
export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ isLoading: true })
  }

  render() {
    return (
      <div className='container'>
        <form className='loginForm' onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={this.onChange}
            value={this.state.username}/>
          <br/>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={this.onChange}
            value={this.state.password}/>
          <br/>
          <button
            type='submit'>
            {this.state.isLoading ? <ThreeBounce color='white' size={14}/> : 'LOGIN' }
          </button>
          <div className='mediaDivider'>
            <hr/>
            <p>OR</p>
          </div>
        </form>
      </div>
    )
  }
}
