import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const mobileIconHandler = () => {
        setIsClicked(!isClicked);
    }

    useEffect(() => {

        const isScrolledHandler = () => {
            if (window.scrollY >= 50) {
                setIsScroll(true)
                console.log(window.scrollY);
            }
            else {
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll", isScrolledHandler);

        return () => window.removeEventListener("scroll", isScrolledHandler);

    }, [])



    return (
        <div className={isScroll ? "navbar__cointainer change" : "navbar__cointainer"} >
            <div className="navbar__row">
                <div className="logo__container"><h2 className="logo" >Cuddle<span className="logo__color">Z</span></h2></div>
                <div className="navbar__part">
                    <ul onClick={mobileIconHandler} className={isClicked ? "ul__list open__left" : "ul__list "}>
                        <li className="li__items" onClick={mobileIconHandler}>Home</li>
                        <li className="li__items" onClick={mobileIconHandler}>Spec</li>
                        <li className="li__items" onClick={mobileIconHandler}>Testnomy</li>
                        <li className="li__items" onClick={mobileIconHandler}>Contact</li>
                    </ul>
                    <button className="navbar__button ">Join now</button>
                </div>
                <div className="navbar__mobile mobile" onClick={mobileIconHandler}>
                    {isClicked ? <FaTimes style={{ fontSize: "1.3em" }} /> : <FaBars style={{ fontSize: "1.3em" }} />}
                </div>
            </div>
        </div>
    )
}

export default Navbar



