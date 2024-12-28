import "./Teamswip.css";
export default function team_swip() {
    return (
        <>

            {/* first swiper ===============================================*/}


            {/* 
            hellosasaSASA
            <swiper-container space-between="10" slides-per-view="3" pagination="true" navigation="true" >
                <swiper-slide >
                    <img className="p-4" id="img8" src={require("./trainer-2.jpg")} />
                </swiper-slide>
                <swiper-slide>
                    <img id="img8" src={require("./trainer-2.jpg")} />

                </swiper-slide>
                <swiper-slide>
                    <img id="img8" src={require("./trainer-2.jpg")} />

                </swiper-slide>
                <swiper-slide>
                    <img id="img8" src={require("./trainer-2.jpg")} />

                </swiper-slide>
                <swiper-slide>
                    <img id="img8" src={require("./trainer-2.jpg")} />

                </swiper-slide>
                <swiper-slide>
                    <img id="img8" src={require("./trainer-2.jpg")} />

                </swiper-slide>

            </swiper-container> */}





            {/* second swiper =================================================== */}

            <section className="container-fluid p-4" >
                <section className="container  " >

                    <div className="row" >
                        <div className="col-md-6 col-12 p-1" >
                            <h4><span id="span10" >What</span>   People Says About Us?</h4>
                            <p id="texttt" > These testimonials serve as a testament to our commitment to helping
                                individuals achieve their fitness goals, and fostering a supportive
                                environment for everyone who walks through our doors.</p>
                        </div>
                        <div className="col-md-6 col-12 p-3" >
                            <swiper-container id="a" style={
                                {

                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "black"
                                }
                            }

                                pagination-clickable="true"
                                navigation="true"
                                effect="cube"
                                grab-cursor="true"
                                cube-effect-shadow="true"
                                cube-effect-slide-shadows="true"
                                cube-effect-shadow-offset="20"
                                cube-effect-shadow-scale="0.94"

                                className="mySwiper">



                                <swiper-slide >
                                    <div id="endd_card" className="card p-1" >
                                        <img id="im" className="card-img-top" src={require("./client-1.jpg")} />
                                        <div id="starss" >
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <p id="text8" className="card-text" >
                                            This gym's 24/7 access has been a lifesaver. Whether it's a
                                            late-night workout or an early morning session, the convenience
                                            here is unbeatable.
                                        </p>
                                        <h6 className="card-title" id="info8"  >David Martinez</h6>
                                        <h6 className="card-title" style={{ fontWeight: "300" }} id="info8"  >Entrepreneur</h6>

                                    </div>

                                </swiper-slide>


                                <swiper-slide >
                                    <div id="endd_card" className="card p-1" >
                                        <img id="im" className="card-img-top" src={require("./client-2.jpg")} />
                                        <div id="starss" >
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="fa-solid fa-star-half-stroke"></i>

                                        </div>
                                        <p id="text8" className="card-text" >
                                            The trainers' expertise and the gym's commitment to cleanliness
                                            during these times have made it a safe haven for me to maintain
                                            my health and de-stress.
                                        </p>
                                        <h6 className="card-title" id="info8"  >Emily Carter</h6>
                                        <h6 className="card-title" style={{ fontWeight: "300" }} id="info8"  >Registered Nurse</h6>

                                    </div>

                                </swiper-slide>


                                <swiper-slide >
                                    <div id="endd_card" className="card p-1" >
                                        <img id="im" className="card-img-top" src={require("./client-3.jpg")} />
                                        <div id="starss" >
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="fa-solid fa-star-half-stroke"></i>

                                        </div>
                                        <p id="text8" className="card-text" >
                                            The variety of classes and the supportive community have kept me
                                            motivated. I've shed pounds, gained confidence, and found a new
                                            level of energy to inspire my students.
                                        </p>
                                        <h6 className="card-title" id="info8"  >John Davisr</h6>
                                        {/* <h6 className="card-title" style={{ fontWeight: "300" }} id="info8"  >Registered Nurse</h6> */}

                                    </div>

                                </swiper-slide>



                                <swiper-slide >
                                    <div id="endd_card" className="card p-1" >
                                        <img id="im" className="card-img-top" src={require("./woman-1867093_640.jpg")} />
                                        <div id="starss" >
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="ri-star-fill"></i>
                                            <i id="icon9" class="fa-solid fa-star-half-stroke"></i>

                                        </div>
                                        <p id="text8" className="card-text" >
                                            This gym's 24/7 access has been a lifesaver. Whether it's a
                                            late-night workout or an early morning session, the convenience
                                            here is unbeatable.
                                        </p>
                                        <h6 className="card-title" id="info8"  >Emily Carter</h6>
                                        <h6 className="card-title" style={{ fontWeight: "300" }} id="info8"  >Entrepreneur</h6>

                                    </div>

                                </swiper-slide>















                            </swiper-container>
                        </div>



                    </div>
                </section >
            </section >
        </>
    )
}