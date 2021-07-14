import React, { useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'

const Header = () => {

    return (
        <div>
            <div className="header__container">
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}

export default Header
