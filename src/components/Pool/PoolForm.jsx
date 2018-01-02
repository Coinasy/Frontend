import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ThreeBounce } from 'better-react-spinkit'
import Validator from 'validator'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../utils/redux'

import { createPool } from '../../actions/pool'

import './styles/PoolForm.scss'

class PoolForm extends Component {
  state = {
    "name": "",
    "size": 0,
    "entries": 10000,
    "fee": 1
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
      e.preventDefault()
      this.props.createPool(this.state)
  }

  render() {
    return (
      <div>
        <form className='poolForm' onSubmit={this.onSubmit}>
          <h3>Create Pool</h3>
          <input type="text" placeholder='name' name='name' onChange={this.onChange}/>
          <input type="number" placeholder='size' name='size' onChange={this.onChange}/>
          <input type="number" placeholder='entries' name='entries' onChange={this.onChange}/>
          <input type="number" placeholder='fee' name='fee' onChange={this.onChange}/>
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}

PoolForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { createPool })(PoolForm)