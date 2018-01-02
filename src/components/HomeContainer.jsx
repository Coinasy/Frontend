import React, { Component } from 'react'
import bridgeSVG from '../images/bridge.svg'

import './styles/HomeContainer.scss'


import MarketTable from './Market/MarketTable.jsx'


class HomeContainer extends Component {
  render() {
    return (
      <div className='container'>
        <MarketTable />
        <span className='loginContent'>
          <div className='signupImageContainer'>
            <span className='campContainer'>
              <img src={bridgeSVG} alt=''/>
            </span>           
          </div>
        </span>
      </div>
    )
  }
}

export default HomeContainer