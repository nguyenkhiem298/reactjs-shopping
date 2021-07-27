import React, { Component } from 'react'
import LeftNav from './LeftNav'
import Products from './Products/Products'

export default class DefaultDM extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-3">
                        <LeftNav/>
                    </div>
                    <div className="col-sm-9">
                        <Products/>
                    </div>
                </div>
            </div>
        )
    }
}
