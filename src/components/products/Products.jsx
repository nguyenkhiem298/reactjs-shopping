import React from "react";
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product'

import useStyles from './styles'

const products = [
    {id:1, name: "Shose", desc: "Running shose", price: "5$", image: 'https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw582a8ddf/content/seasonal-content/homepage/2021/05/endorphinshift-onHOVER-d.jpg'},
    {id:2, name: "IPhone10", desc: "Running shose", price: "15$", image: 'https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw582a8ddf/content/seasonal-content/homepage/2021/05/endorphinshift-onHOVER-d.jpg'},
    {id:3, name: "Glaxy Book", desc: "Running shose", price: "10$", image: 'https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw582a8ddf/content/seasonal-content/homepage/2021/05/endorphinshift-onHOVER-d.jpg'}
]
const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Grid container justify="center" spacing={4}>
                    {
                        products.map((pro) => (
                            <Grid key={pro.id} item xs={12} sm={6} md={4} lg={3}>
                                <Product product={pro} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </main>
    )
}
export default Products;