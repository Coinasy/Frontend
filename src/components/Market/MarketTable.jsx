import React, {Component} from 'react'
import ReactTable from "react-table"

import sockets from '../../utils/sockets'

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
        // request once to
        sockets.emit('all market request')
        sockets.on('all market response', socket => {
            this.setState({socket})
            sockets.emit('all market request')
        })
    }

    componentWillUnmount() {
        sockets.removeListener('all market response')
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