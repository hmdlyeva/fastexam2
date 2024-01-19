import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById, AddtoWish } from '../../redux/slice/slice'
import {Helmet} from "react-helmet";
const Detail = () => {
    const { id } = useParams()
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserById())
    }, [])

    let pd = products.filter((p) => p._id === id)
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {
                pd && pd.map((p) => (
                    <div key={p._id} className="card">
                        <h3>{p.name}</h3>
                        <p onClick={() => {
                            dispatch(AddtoWish(p))
                        }}>💜</p>
                        <div className="detail">
                            <p>{p.detail}</p>
                            <span>................................................................</span>
                            <p>${p.price}.00</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Detail