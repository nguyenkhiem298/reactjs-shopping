import React, { Component } from 'react'
import Product from './Product'
import data from '../data/product.json'

export default class Products extends Component {
    
    
    render() {

        return (
            <div className="container">
                <div className="row mt-3">
                    {
                        data.map((prod) => {
                            return (
                                <Product product1={prod}/>
                            )
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}
