import React, { useEffect, useState } from 'react'
import './menu.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById, AddtoWish, AddtoCart } from '../../../redux/slice/slice'
import { Link } from 'react-router-dom'
const Menu = () => {

    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserById())
    }, [])

    console.log(products)

    const [sortingCriteria, setSortingCriteria] = useState('a')

    const handleSortingChange = (value) => {
        setSortingCriteria(value);
    };

    const getSortedProducts = () => {
        switch (sortingCriteria) {
            case "a":
                return [...products].sort((p, q) =>
                    p.name.localeCompare(q.name)
                );
            case "z":
                return [...products].sort((p, q) =>
                    q.name.localeCompare(p.name)
                );
            case "price":
                return [...products].sort((p, q) => p.price - q.price);
            default:
                return products;
        }
    };
    const sortedProducts = getSortedProducts();


    return (
        <section id='menu'>
            <div className="menu">
                <div className="container">
                    <div className="my_menu">
                        <div className="upper">
                            <div className="line"></div>
                            <h1>Our Menu</h1>
                            <div className="line"></div>
                            <select name="" id="filter" value={sortingCriteria}
                                onChange={(e) => handleSortingChange(e.target.value)}>
                                <option value="a">A-Z</option>
                                <option value="z">Z-A</option>
                                <option value="price">Price</option>
                            </select>
                        </div>

                        <div className="btn_links">
                            <ul>
                                <li className='orange'>Breakfast</li>
                                <li>Brunch</li>
                                <li>Lunch</li>
                                <li>Dinner</li>
                            </ul>
                        </div>

                        <div className="cards">
                            {
                                products && sortedProducts.map((p) => (
                                    <Link style={{ textDecoration: "none" }} key={p._id} to={`/detail/${p._id}`}>
                                        <div className="card">
                                            <div className="up">
                                                <h3>{p.name}</h3>
                                                <p onClick={(e) => {
                                                    e.preventDefault()
                                                    dispatch(AddtoWish(p))
                                                }}>💜</p>
                                                <p onClick={(e) => {
                                                    e.preventDefault()
                                                    dispatch(AddtoCart(p))
                                                }}>️‍🩹</p>
                                            </div>
                                            <div className="detail">
                                                <p className='pp'>{p.detail}</p>
                                                <span>................................................................</span>
                                                <p>${p.price}.00</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>

                        <button>See More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu