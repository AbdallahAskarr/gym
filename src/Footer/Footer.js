import "./Footer.css";
export const Foot = () => {
    return (
        <>
            <section id="foo" style={{ marginTop: "26px" }} className="container-fluid p-5">
                <div className="row p-1">
                    <div className="col-md-4 col-6 p-2">
                        <h3 id="endinfo" > <img style={{
                            width: "10%", marginBottom: "5px",
                            filter: "contract(1.6)"
                        }} src={require("./logo.png")} /> Power</h3>
                        <p id="textendd"> Take the first step towards a healthier, stronger you with our
                            unbeatable pricing plans. Let's sweat, achieve, and conquer
                            together!</p>
                        <div className="endicon ">
                            <i id="gicon" style={{ padding: "10px", margin:"0 auto" }} class="fa-brands fa-facebook"></i>
                            <i id="gicon" style={{ padding: "10px" }} class="fa-brands fa-instagram"></i>
                            <i id="gicon" style={{ padding: "10px" }} class="fa-brands fa-twitter"></i>
                        </div>

                    </div>

                    <div className="col-md-2 p-2 col-6">
                        <h3 id="endinfo" >Company</h3>
                        <h5 id="hh" >Business </h5>
                        <h5 id="hh"> Franchise</h5>
                        <h5 id="hh">Partnership</h5>
                        <h5 id="hh">Network </h5>
                    </div>
                    <div className="col-md-3 p-2 col-6 ">
                        <h3 id="endinfo" >About Us</h3>
                        <h5 id="hh">Blogs</h5>
                        <h5 id="hh">Security</h5>
                        <h5 id="hh" >Careers</h5>
                    </div>
                    <div className="col-md-3 p-2 col-6 ">
                        <h3 id="endinfo">Contact</h3>
                        <h5 id="hh" >Contact Us</h5>
                        <h5 id="hh">Privacy Policy</h5>
                        <h5 id="hh">Terms & Conditions</h5>
                        <h5 id="hh">BMI Calculator</h5>

                    </div>

                    <p style={{ marginTop: "10px" }} className="text-center text-dark p-4"> &copy;copyright developed by <span id="span9" style={{
                        color: "red", fontSize: "18px"
                    }}>" Abdallah Askar "</span> All right reserved.</p>
                </div>
            </section>


        </>
    )
}