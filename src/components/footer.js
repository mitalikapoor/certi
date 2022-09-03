import react from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer> 
            <div className="container-fluid bg-dark text-light text-center align-items-center " id="footer" >
                <div className=" p-2 " >
                
                    <div>
                        Interested in working with me?
                    </div>
                    <Link to={"/Contact"}>
                        <button className="btn bg-light text-dark bt-lg">Let's talk</button>
                    </Link>
                    
                </div>

                <div className="row pt-5">
                    <div className="col-12 col-md-4 p-2"> 
                        <h5 className="text-info"> More Links </h5>
                        <a href="/" className="text-light d-block" >Blogs</a>
                        <Link to="/" className="text-light d-block" >Home</Link>
                        <Link to="/Contact" className="text-light d-block" >Contact me</Link>
                        <Link to="/Recommendation" className="text-light d-block" >
                            Write a recommendation <i className="fa-solid fa-heart"></i>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 p-2"> 
                        <p className="text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur rerum autem dignissimos sed officia minima, saepe dolores debitis asperiores, natus numquam iste? Cupiditate ea fugit doloremque deserunt quam dolore architecto!
                        </p>
                            
                    </div>
                    <div className="col-12 col-md-4"> 
                        <h5 className="text-primary"> Social </h5>
                        <i className="fab fa-facebook-square h3 d-block"></i>
                        <i className="fab fa-linkedin h3 d-block"></i>
                    </div>
                </div>
                <div className="text-muted py-3">
                    <p>copyright © mitali kapoor 2021 </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;