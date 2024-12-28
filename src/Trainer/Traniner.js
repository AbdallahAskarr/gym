import "./Trainer.css"
export default function Train() {
    return (
        <>
            <section id="train" className="container-fluid  p-4" >
                <section className="container  p-4" >
                    <h4 id="info5" className="text-center" > <span id="span5" >Our Trainers</span> </h4>
                    <p className="text-center" id="text5">
                        Our trainers are more than just experts in exercise; they are passionate
                        about helping you achieve your health and fitness goals. Our trainers
                        are equipped to tailor workout programs to meet your unique needs.
                    </p>
                    <div className="row" >

                        <div className="col-md-4 col-12 p-3   " >
                            <img id="img5" src={require("./trainer-1.jpg")} />
                        </div>


                        <div id="child5" className="col-md-4 col-12 p-3    " >
                            <h4 id="second_info5" >James Rodriguez</h4>
                            <h5 id="second_info5" style={{ fontWeight: "300" }}  >Strength and Conditioning</h5>
                            <hr style={{ fontWeight: "300" }} />
                            <p style={{ fontWeight: '300' }} id="second_text5" >
                                With a background in competitive sports, he's dedicated to helping
                                you reach your peak physical performance.
                            </p>
                            <div className="trainer__socials">
                                <i id="icon5" className="ri-facebook-fill"></i>
                                <i id="icon5" className="ri-google-fill"></i>
                                <i id="icon5" className="ri-instagram-line"></i>
                                <i id="icon5" className="ri-twitter-fill"></i>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 p-3  " >
                            <img id="img5" src={require("./trainer-2.jpg")} />
                        </div>

                        <div id="child5" className="col-md-4 col-12 p-3  " >
                            <h4 id="second_info5" >Mark Harris</h4>
                            <h5 id="second_info5" style={{ fontWeight: "300" }}> HIIT and Functional</h5>
                            <hr style={{ fontWeight: "300" }} />
                            <p style={{ fontWeight: '300' }} id="second_text5" >
                                His energetic and dynamic workouts are designed to push your
                                limits, boost metabolism, and torch calories.
                            </p>
                            <div className="trainer__socials">
                                <i id="icon5" className="ri-facebook-fill"></i>
                                <i id="icon5" className="ri-google-fill"></i>
                                <i id="icon5" className="ri-instagram-line"></i>
                                <i id="icon5" className="ri-twitter-fill"></i>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 p-3   " >
                            <img id="img5" src={require("./trainer-3.jpg")} />
                        </div>



                        <div id="child5" className="col-md-4 col-12 p-3   " >
                            <h4 id="second_info5" >Emily Davis</h4>
                            <h5 id="second_info5" style={{ fontWeight: "300" }}> Yoga and Mindfulness</h5>
                            <hr style={{ fontWeight: "300" }} />
                            <p style={{ fontWeight: '300' }} id="second_text5" >
                                Emily's sessions are about physical postures and also about
                                cultivating inner peace and mindfulness.
                            </p>
                            <div className="trainer__socials">
                                <i id="icon5" className="ri-facebook-fill"></i>
                                <i id="icon5" className="ri-google-fill"></i>
                                <i id="icon5" className="ri-instagram-line"></i>
                                <i id="icon5" className="ri-twitter-fill"></i>
                            </div>
                        </div>




                    </div>
                </section>
            </section >
        </>
    )
}