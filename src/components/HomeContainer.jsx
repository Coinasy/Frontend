import React, { Component } from 'react'
import bridgeSVG from '../images/bridge.svg'

import './styles/HomeContainer.scss'

class HomeContainer extends Component {
  render() {
    return (
      <div className='container'>
          <div className='signupImageContainer'>
            <span className='campContainer'>
              <img src={bridgeSVG} alt=''/>
            </span>
          </div>
      </div>
    )
  }
}

export default HomeContainer