import "./About.css";
import { motion } from "framer-motion";
export default function About() {
    return (
        <>
            <section id="abou" className="container-fluid p-3 ">
                <section className="container ">
                    <div className="row" >


                        <div className="col-md-6 col-12" >
                            {/* <img id="second_img" src={require('./dot-bg.png')} className="p-3" /> */}
                            <img id="img2" className="" src={require("./about.png")} />
                        </div>
                        <motion.div

                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}

                            className="col-md-6 col-12 p-5" >
                            <h4 id="info2" > <span id="span2" >Our Story</span> </h4>
                            <p id="text2">  Led by our team of expert and motivational instructors, "The Class You
                                Will Get Here" is a high-energy, results-driven session that combines
                                a perfect blend of cardio, strength training, and functional
                                exercises.</p>


                            <div >
                                <i id="icon2" class="ri-open-arm-line p-2"></i>
                                <h6 id="second_info">Open Door Policy</h6>
                                <p id="second_text" >   We believe in providing unrestricted access to all individuals,
                                    regardless of their fitness level, age, or background.</p>

                            </div>

                            <div >
                                <i id="icon2" class="ri-shield-cross-line p-2"></i>
                                <h6 id="second_info">Fully Insured</h6>
                                <p id="second_text" >Your peace of mind is our top priority, and our commitment to
                                    your safety extends to every aspect of your fitness journey. </p>

                            </div>

                            <div >
                                <i id="icon2" class="ri-p2p-line p-2"></i>
                                <h6 id="second_info">Personal Trainer</h6>
                                <p id="second_text" >  With personalized workout plans tailored to your needs, we will
                                    ensure that you get the most out of your gym experience.</p>

                            </div>



                        </motion.div>






                    </div>
                </section>
            </section>

        </>
    )
}