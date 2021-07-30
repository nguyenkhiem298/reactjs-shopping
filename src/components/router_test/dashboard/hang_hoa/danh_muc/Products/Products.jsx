/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import data from '../../../../data/productDM.json';
import Product from './Product';

export default class Products extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã Hàng</th>
                        <th scope="col">Đơn Hàng</th>
                        <th scope="col">Giá Bán</th>
                        <th scope="col">Giá Vốn</th>
                        <th scope="col">Tồn Kho</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((pro) => {
                            return (
                                <Product pro={pro}/>
                            )
                        })
                    }
                </tbody>
            </table>

        )
    }
}
