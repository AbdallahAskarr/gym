
import "./Navbar.css";
export default function Nav() {

    return (
        <>
            <nav class="navbar navbar-expand-lg " id="navv">
                <div class="container-fluid">
                    <a id="logo" class="navbar-brand" href="#"> <img id="loggo" src={require("./logo.png")} />
                        <span style={{ position: 'relative', top: "3px", left: "8px" }}>Power</span>  </a>
                    <button style={{ border: "none" }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler" style={{ border: "none" }}><i style={{ fontWeight: "bolder" }} class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2  ms-auto  mb-lg-0 ">
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link " aria-current="page" href="#hom">Home</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start ">
                                <a id="a" class="nav-link" href="#abou">About</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#clas">Classes</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#train">Traniners</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#prc">Pricing </a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                {/* <a id="a" class="nav-link" href="#con">Conta</a> */}
                                <button id="aa" href="#con">Contact Us</button>

                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>


    )
}