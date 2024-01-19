import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById, AddtoWish, AddtoCart, remvCart, dellCart } from '../../redux/slice/slice'
import { Helmet } from "react-helmet";
import Navbar from '../../components/navbar/Navbar';
import './basket.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Basket = () => {
    const products = useSelector((state) => state.products.basket)
    const dispatch = useDispatch()
    return (
        <div id='basket'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
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
                                    {/* <Button onClick={() => {
                                        dispatch(AddtoWish(p))
                                    }} size="small">💜</Button> */}
                                    <Button onClick={() => {
                                        dispatch(remvCart(p))
                                    }} size="small">-</Button>
                                    <p>{p.count}</p>
                                    <Button onClick={() => {
                                        dispatch(AddtoCart(p))
                                    }} size="small">+</Button>
                                    <Button onClick={() => {
                                        dispatch(dellCart(p))
                                    }} size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Basket