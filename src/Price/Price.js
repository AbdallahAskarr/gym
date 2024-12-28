import { Form } from "react-bootstrap";
import "./Price.css";
import { motion } from "framer-motion";
export default function Price() {
    return (

        <>
            <section id="prc" className="container-fluid p-4 ">
                <section className="container  p-1" >
                    <h4 className="text-center" > <span id="span7" >Our Pricing</span> </h4>
                    <p id="text7">
                        Our pricing plan comes with various membership tiers, each tailored to
                        cater to different preferences and fitness aspirations.
                    </p>
                    <div className="row" >

                        <motion.div
                            initial={{ opacity: 0, rotateX: "90deg" }}
                            whileInView={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 2 }}

                            id="child7" className="col-md-4 col-12 p-5  " >
                            <div className="card " id="card_shadow" >
                                <h4 className="card-title" id="info7">Basic Plan</h4>
                                <img id="img7" src={require("./price-1.png")} className="card-img-top" />
                                <p id="text7" className="card-text" >
                                    Our Basic Plan is the perfect starting point for individuals
                                    looking to kickstart their fitness journey or maintain an active
                                    lifestyle.
                                </p>
                                <hr style={{ width: "70%", margin: "0 auto", fontWeight: "300" }} />
                                <h4 style={{ marginTop: "10px" }} id="secondinfo7">Key Features</h4>
                                <p style={{ marginTop: "6px" }} id="second_text7" >Smart workout plan</p>
                                <p id="second_text7" >At home workouts</p>
                                <br />
                                <br />
                                <br />
                                <p style={{ visibility: "hidden" }}  >span</p>

                                <button id="btn7" className="btn " >Join Now</button>
                            </div>
                        </motion.div >
                        {/* ==== */}

                        <motion.div

                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}

                            id="child7" className="col-md-4 col-12 p-5" >
                            <div className="card" id="card_shadow">
                                <h4 className="card-title" id="info7">Weekly Plan</h4>
                                <img id="img7" src={require("./price-2.png")} className="card-img-top" />
                                <p id="text7" style={{}} className="card-text col-md-11  " >
                                    Our weekly plan is designed to provide structure and variety to
                                    your workouts, ensuring you stay motivated and on track.
                                </p>
                                <hr style={{ width: "70%", margin: "0 auto", fontWeight: "300" }} />
                                <h4 style={{ marginTop: "10px" }} id="secondinfo7">Key Features</h4>
                                <p style={{ marginTop: "6px" }} id="second_text7" >PRO Gyms</p>
                                <p id="second_text7" >Smart workout plan</p>
                                <p id="second_text7" >At home workouts</p>
                                <br />
                                <br />
                                <br />


                                <button id="btn7" className="btn " >Join Now</button>
                            </div>
                        </motion.div>
                        {/* ===== */}

                        <motion.div
                            initial={{ opacity: 0, rotateX: "90deg" }}
                            whileInView={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 2 }}
                            id="child7" className="col-md-4 col-12 p-5" >
                            <div className="card" id="card_shadow" >
                                <h4 className="card-title" id="info7">Monthly Plan</h4>
                                <img id="img7" src={require("./price-3.png")} className="card-img-top" />
                                <p id="text7" className="card-text" >
                                    With this flexible membership, you'll have access to our
                                    state-of-the-art gym facilities, expert trainers, and a vibrant
                                    fitness community
                                </p>
                                <hr style={{ width: "70%", margin: "0 auto", fontWeight: "300" }} />
                                <h4 style={{ marginTop: "10px" }} id="secondinfo7">Key Features</h4>
                                <p style={{ marginTop: "px" }} id="second_text7" >ELITE Gyms & Classes</p>
                                <p id="second_text7" >PRO Gyms</p>
                                <p id="second_text7" >Smart workout plan</p>
                                <p id="second_text7" >At home workouts</p>
                                <p style={{ marginTop: "" }} id="second_text7" >Personal Training</p>

                                <button id="btn7" className="btn " >Join Now</button>
                            </div>
                        </motion.div>












                    </div>
                </section>
            </section >
        </>


    )
}