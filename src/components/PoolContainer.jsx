import React, {Component} from 'react'

import PoolList from './Pool/PoolList.jsx'
import PoolForm from './Pool/PoolForm.jsx'

class PoolContainer extends Component {
    state = {

    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div className="container">
                <PoolList />
                <PoolForm />
            </div>
        )
    }
}

export default PoolContainer