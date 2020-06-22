import React from 'react'
import { Navbar, Parallax, Quotes } from './Components/Index'
import { Products, Footer, VisionMission } from './Containers/Index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";

const Router = (props) => {
    return (
        <div className='font-playfair'>
            <BrowserRouter>
                <Navbar />
                <Parallax />
                <Products />
                <Quotes />
                <VisionMission />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router