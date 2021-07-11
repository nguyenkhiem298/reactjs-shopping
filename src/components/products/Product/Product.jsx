//rafc
import React from 'react'
import {Card, CardMedia, CardContent,Typography, CardActions, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import useStyles from './style'

const Product = ({product}) => {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${product.price}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to card">
                    <AddShoppingCartIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
