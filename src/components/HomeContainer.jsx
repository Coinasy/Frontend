import React, { Component } from 'react'
import bridgeSVG from '../images/bridge.svg'

import './styles/HomeContainer.scss'

import io from 'socket.io-client'
import MarketTable from './Market/MarketTable.jsx'

const sockets = io('http://localhost:8000')

class HomeContainer extends Component {
  state = {
    socket: []
  }

  componentDidMount() {
    sockets.on('market', socket => {
      this.setState({socket})
    })
  }

  render() {
    return (
      <div className='container'>
          {this.state.socket.length ? <MarketTable data={this.state.socket}/>: null}
      </div>
    )
  }
}

export default HomeContainer