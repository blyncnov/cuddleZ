import React from 'react'
import { FaEllo, FaGetPocket, FaLess } from "react-icons/fa"

const Description = () => {
    return (
        <div className="desc__section">
            <div className="desc__row">
                <div className="desc__text">
                    <h1 className="desc__desc">Cuddle-Z pioneering virtual care model is built around women and families, delivering better outcomes and lower costs for everyone.</h1>
                    <p style={{ textAlign: "center" }}>Marvel, and Sketch and accelerate your process from idea to test.</p>
                    <div className="desc__boxes">


                        <div className="desc__box">
                            <div className="box__title">
                                <h4> <FaEllo /> Whole-person care</h4>
                            </div>
                            <br />
                            <div className="box__title">
                                <p> A holistic approach that offers comprehensive care for all families.
                                </p>
                            </div>
                        </div>


                        <div className="desc__box active">
                            <div className="box__title">
                                <h4><FaGetPocket /> Exceptional outcomes</h4>
                            </div>
                            <br />
                            <div className="box__title">
                                <p> Dedicated Care Advocates and data-driven insights deliver better outcomes.
                                </p>
                            </div>
                        </div>


                        <div className="desc__box">
                            <div className="box__title">
                                <h4> <FaEllo /> Whole-person care</h4>
                            </div>
                            <br />
                            <div className="box__title">
                                <p> A holistic approach that offers comprehensive care for all families.
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* testimg here */}

                    <div className="desc__boxes rm">
                        <div className="desc__box active">
                            <div className="box__title">
                                <h4><FaGetPocket /> Exceptional outcomes</h4>
                            </div>
                            <br />
                            <div className="box__title">
                                <p> Dedicated Care Advocates and data-driven insights deliver better outcomes.
                                </p>
                            </div>
                        </div>


                        <div className="desc__box">
                            <div className="box__title">
                                <h4><FaLess /> Lower costs</h4>
                            </div>
                            <br />
                            <div className="box__title">
                                <p> Proactive intervention reduces the need for costly procedures.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Description
