import "./Classes.css";
import { motion } from "framer-motion";
export default function Classe() {
    return (
        <>
            <section id="clas" className="container-fluid " >
                <section className="container" >
                    <h4 id="info3" > <span id="span3" >Our Classes</span> </h4>
                    <p id="text3">
                        Discover a diverse range of exhilarating classes at our gym designed to
                        cater to all fitness levels and interests. Whether you're a seasoned
                        athlete or just starting your fitness journey, our classes offer
                        something for everyone.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="row"  >


                        <div id="parent4" className="col-md-3 col-12 p-3" >
                            <div style={{ width: "90%" }} className="card" >
                                <img id="img4" src={require("./class-1.jpg")} className="card-img-top" />
                                <div id="body_card" className="card-body" >
                                    <h5 id="info4" className="card-text" >Strength Trainin</h5>
                                    <p id="text4" className="card-title" >Resistance Training</p>
                                </div>
                            </div>
                        </div>




                        <div id="parent4" className="col-md-3 col-12 p-3" >
                            <div style={{ width: "90%" }} className="card" >
                                <img id="img4" src={require("./class-2.jpg")} className="card-img-top" />
                                <div id="body_card" className="card-body" >
                                    <h5 id="info4" className="card-text" >Flexibility & Mobility</h5>
                                    <p id="text4" className="card-title" >Yoga & Pilates</p>
                                </div>
                            </div>
                        </div>


                        <div id="parent4" className="col-md-3 col-12 p-3" >
                            <div style={{ width: "90%" }} className="card" >
                                <img id="img4" src={require("./class-3.jpg")} className="card-img-top" />
                                <div id="body_card" className="card-body" >
                                    <h5 id="info4" className="card-text" >HIIT</h5>
                                    <p id="text4" className="card-title" >Circuit Training</p>
                                </div>
                            </div>
                        </div>


                        <div id="parent4" className="col-md-3 col-12  p-3" >
                            <div style={{ width: "90%" }} className="card" >
                                <img id="img4" src={require("./class-4.jpg")} className="card-img-top" />
                                <div id="body_card" className="card-body" >
                                    <h5 id="info4" className="card-text" >Group Fitness</h5>
                                    <p id="text4" className="card-title" >Zumba or Dance</p>
                                </div>
                            </div>
                        </div>















                    </motion.div>
                </section>
            </section>
        </>
    )
}