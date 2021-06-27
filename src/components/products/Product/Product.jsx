//rafc
import React from 'react'
import {Card, CardMedia, CardContent, CardActions,Typography, IconButton} from '@material-ui/core';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './style'

const Product = ({product}) => {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default Product;
