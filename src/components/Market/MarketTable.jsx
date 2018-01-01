import React, {Component} from 'react'
import ReactTable from "react-table";

import io from 'socket.io-client'
const sockets = io('http://localhost:8000')

// move to constant later
const TABLE_KEY = ["id", "name", "symbol", "rank", "price_usd", "price_btc", "24h_volume_usd", "market_cap_usd", "available_supply", "total_supply", "max_supply", "percent_change_1h", "percent_change_24h", "percent_change_7d", "last_updated"]

const COLUMN = TABLE_KEY.map(value => {
    return {
        Header: value,
        accessor: value
    }
})

import "react-table/react-table.css";


class MarketTable extends Component {
    state = {
        socket: []
    }

    componentWillMount() {
        // request once so it doesn't have to wait the 10 sec interval on backend
        sockets.emit('all market request')
    }
    
    componentDidMount() {
        sockets.on('all market respond', socket => {
            this.setState({socket})
        })
    }

    componentWillUnmount() {
        sockets.removeListener('all market respond')
    }

    render() {
        return (
            <div className="marketTableContainer">
                <ReactTable
                    data={this.state.socket}
                    columns={COLUMN}
                    defaultPageSize={100} />
            </div>
        )
    }
}

export default MarketTable