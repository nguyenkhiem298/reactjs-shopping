import React from "react";
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product'

const products = [
    {id:1, name: "shose", desc: "Running shose", price: "5$"},
    {id:2, name: "IPhone10", desc: "Running shose", price: "15$"},
    {id:3, name: "Glaxy Book", desc: "Running shose", price: "10$"}
]
const Products = () => {

    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    products.map((pro) => (
                        <Grid key={pro.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product product={pro} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products;