import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById, AddtoWish } from '../../redux/slice/slice'
import { Helmet } from "react-helmet";
import Navbar from '../../components/navbar/Navbar';
import './wish.scss'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Wishlist = () => {
    const products = useSelector((state) => state.products.wishlist)
    const dispatch = useDispatch()
    return (
        <div id='wishlist'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nav">

                <Navbar />
            </div>
            <div className="container">
                <div className="cards">
                    {
                        products && products.map((p) => (

                            <Card key={p._id} sx={{ maxWidth: 345 }}>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {p.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.detail}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => {
                                        dispatch(AddtoWish(p))
                                    }} size="small">💜</Button>
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist