import "./Home.css";
import { motion } from "framer-motion";

export default function Hom() {
    return (
        <>
            <section id="hom"  style={{ backgroundColor: "#faf9fe" }} className="container-fluid  p-2" >

                <section className="container   " >
                    <div className="row " >

                        <motion.div

                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}


                            id="first_div" className="col-md-7 col-12 p-5 order-md-1 order-2" >
                            <h3 id="info1" >Build Your Body & <br /> <span id="span1"> Shape Yourself!</span> </h3>
                            <p id="text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. sum dolor sit amet
                                consectetur adipisicing elit.  Reiciendis, nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, natus.</p>
                            <button id="btn1" >Join Today</button>
                        </motion.div>
                        <div className="col-md-5 col-12 order-md-2 order-1 ">
                            <img id="img1" src={require("./header.png")} />
                        </div>







                    </div>
                </section>
            </section>

        </>


    )
}