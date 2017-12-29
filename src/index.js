import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Routes from './Routes.jsx'

// Default Styles
import './index.scss'

const root = document.getElementById('root')
root && ReactDOM.render(<AppContainer><Routes/></AppContainer>, root)