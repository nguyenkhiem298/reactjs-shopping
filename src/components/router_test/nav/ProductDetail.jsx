import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-3">
                <div className="container">
                <h1 className="display-3 text-center">Detail Product Page</h1>
                <img className="card-img-top" src="https://via.placeholder.com/550x150" alt="Card image cap" />
                <p className="lead mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sequi quam magnam architecto ratione laudantium dolorem, eos atque unde accusamus aperiam debitis ducimus provident modi rerum itaque earum error nam?
                <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas dicta corporis, unde explicabo perspiciatis quae impedit sapiente quo ipsam delectus ipsum voluptate aspernatur, maiores repudiandae obcaecati. Cupiditate, nisi nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident cum! Ratione laudantium hic vero error? Facilis quibusdam repellendus impedit omnis sed, error illo doloribus consectetur nostrum amet, minima culpa.
                </p>
                <hr className="my-2" />
                <p>More info</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                </p>
                </div>
            </div>
        )
    }
}