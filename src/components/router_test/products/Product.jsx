import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="col-3 mb-2">
                <div className="card" style={{width: '18rem'}}>
                    <a href="/"><img className="card-img-top" src={this.props.product1.img} alt="Card image cap" /></a>
                    <div className="card-body">
                    <h5 className="card-title">{this.props.product1.name}</h5>
                    <p className="card-text">{this.props.product1.desc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
