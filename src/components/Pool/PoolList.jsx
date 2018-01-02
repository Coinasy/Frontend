import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../utils/redux'


import {Link } from 'react-router-dom'
import {getMyPool , getMorePool} from '../../actions/pool'

import './styles/PoolList.scss'

class PoolList extends Component {

    state = {
        mylist: [],
        moreList: []
    }

    componentDidMount() {
        this.props.getMorePool().then(res => {
            this.setState({moreList: res.data})
        })

        this.props.getMyPool().then(res => {
            this.setState({mylist: res.data})
        })
    }

    renderMorePoolList() {
        return this.state.moreList.length ? 
            <ul>
                <h2>Other pool you might want to see</h2>
                {
                    this.state.moreList.map(value => {
                        return <li className='poolList' key={value._id}>{value.name} - {value.participant.length} 
                            <Link className='poolLinkButton' to={'/join/' + value._id}>JOIN</Link></li>
                    })
                }
            </ul>
            :null
    }

    renderMyPoolList() {
        return this.state.mylist.length ? 
            <ul>
                <h2>Pool you already joined</h2>
                {
                    this.state.mylist.map(value => {
                        return <li className='poolList' key={value._id}>{value.name} - {value.participant.length} 
                            <Link className='poolLinkButton' to={'/view/' + value._id}>JOIN</Link></li>
                    })
                }
            </ul>
            :null
    }

    render() {
        return <div>
            {this.renderMorePoolList()}
            {this.renderMyPoolList()}
        </div>
    }
}


PoolList.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {getMyPool, getMorePool })(PoolList)