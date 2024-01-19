import React from 'react'
import { Input } from '@mui/material';
import './contact.scss'
const Contact = () => {
    return (
        <section id='contact'>
            <div className="contact">
                <div className="container">
                    <div className="my_contact">


                        <div className="form_box">
                            <div className="upper">
                                <div className="box"></div>
                                <h1>Contact us</h1>
                                <div className="box"></div>
                            </div>

                            <div className="inputs">
                                <Input className='inp' placeholder='Name' />
                                <Input className='inp' placeholder='E-mail' />
                            </div>
                            <textarea className='textarea' name="" id="" cols="90" rows="10" placeholder='Message'></textarea>


                            <button>Send Message</button>
                        </div>

                      
                    </div>
                    <div className="footer">
                            <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Contact