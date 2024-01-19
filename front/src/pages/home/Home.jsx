import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/homepages/hero/Hero'
import Menu from '../../components/homepages/menu/Menu'
import { Helmet } from "react-helmet";
import Welc from '../../components/homepages/welcome/Welc';
import Testi from '../../components/homepages/testimonials/Testi';
import Service from '../../components/homepages/service/Service';
import Contact from '../../components/homepages/contact/Contact';
const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar />
            <Hero />
            <Welc />
            <Testi />
            <Service />
            <Menu />
            <Contact />
        </>
    )
}

export default Home