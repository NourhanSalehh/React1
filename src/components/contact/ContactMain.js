import Contactform from "../Contactform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

function Contactmain(){
        return(
                <>
                <section className="contact-us">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                                <Contactform />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                                <div className="side">
                                                        <h3>Contact Us for any suggestion</h3>
                                                        <li><FontAwesomeIcon icon={faMap}/><a href="https://www.google.com/maps">Location</a></li>
                                                        <hr/>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
                </>
        )
}

export default Contactmain;