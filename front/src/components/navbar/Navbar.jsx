import React from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <section id='navbar'>
            <div className="navbar">
                <div className="containe">
                    <div className="my_navbar">
                        <div className="left">
                            <h1>Pulse</h1>
                            <div className="box"></div>
                        </div>
                        <div className="midd">
                            <ul>
                                <li className='orange' onClick={() => {
                                    navigate('/')
                                }}>Home</li>
                                <li onClick={() => {
                                    console.log('heyyyyy')
                                    navigate('/wishlist')
                                }}>wishlist</li>
                                <li onClick={() => {
                                    navigate('/basket')
                                }}>cart</li>
                                <li onClick={() => {
                                    navigate('/add')
                                }}>Add</li>
                                <li>About us</li>
                                <li>Restaurant</li>
                                <li>News</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="right">
                            <h1 className='h1'>Reservations</h1>
                            <FontAwesomeIcon icon={faPhone} />
                            <h1>652-345 3222 11</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar