/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
        }
    }

    show1 = () => {
        return (
            <tr>
                <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </tr>
        )
    }

    handleShow = ()=>{
        if(this.state.status === false) {
            return null;
        }else {
            this.show1();
        }
        console.log(this.state.status);
    }

    handleClick = () => {
        if(this.state.status === false) {
            this.setState({status: true});
        }else {
            this.setState({status: false});
        }
        // console.log(this.state.status);
    }


    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button onClick={ this.handleClick } type="button" className="btn btn-secondary">Action</button></td>
                    </tr>
                    { this.handleShow() }
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><button type="button" class="btn btn-secondary">Action</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td><button type="button" class="btn btn-secondary">Action</button></td>
                    </tr>
                </tbody>
            </table>

        )
    }
}
