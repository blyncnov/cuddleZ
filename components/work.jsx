import React from 'react'
import Image from "next/image"

import Picrure from "../public/img.jpg"
import Picrure2 from "../public/ing.jpg"
import Picrure3 from "../public/iig.png"

const Work = () => {
    return (
        <div className="desc__section work">
            <div className="desc__row">
                <div className="desc__text">
                    <h1 className="desc__desc">Get quantifiable user insights you can act on instantly.</h1>
                    <p style={{ textAlign: "center" }}>Marvel, and Sketch and accelerate your process from idea to test.</p>
                </div>
            </div>
            <div className="work__desc">
                <div className="work__talk">
                    <div className="work__box">
                        <h3>Whole-person care</h3>
                        <br />
                        <p className="hero__desc cat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore similique nostrum qui vel animi odio modi corporis expedita doloribus nam, tenetur enim! Impedit obcaecati corrupti, odit expedita ex voluptates!</p>
                        <button className="strt">See More ...</button>
                    </div>
                    <div className="work__box">
                        <Image src={Picrure} alt="body" />
                    </div>
                </div>

                <div className="work__talk reverse">
                    <div className="work__box">
                        <h3>Exceptional outcomes</h3>
                        <br />
                        <p className="hero__desc cat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore similique nostrum qui vel animi odio modi corporis expedita doloribus nam, tenetur enim! Impedit obcaecati corrupti, odit expedita ex voluptates!</p>
                        <button className="strt">See More ...</button>
                    </div>
                    <div className="work__box">
                        <Image src={Picrure3} alt="body" />
                    </div>
                </div>

                <div className="work__talk ">
                    <div className="work__box">
                        <h3>Ongoing care that changes lives</h3>
                        <br />
                        <p className="hero__desc cat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore similique nostrum qui vel animi odio modi corporis expedita doloribus nam, tenetur enim! Impedit obcaecati corrupti, odit expedita ex voluptates!</p>
                        <button className="strt">See More ...</button>
                    </div>
                    <div className="work__box">
                        <Image src={Picrure2} alt="body" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Work
