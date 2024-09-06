import "./footer.css"
import logo from "../../imgs/Lemon shrimp.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../imgs/social-icons/facebook.png"
import whatsapp from "../../imgs/social-icons/whatsapp.png"
import twitter from "../../imgs/social-icons/twitter.png"
import instagram from "../../imgs/social-icons/instagram.png"
import { Link } from "react-router-dom";


function Footer(){
        return(
                <>
                <footer>
                        <div className="overlay"></div>
                        <div className="container">
                                <div className="row">
                                        <div className=" main col-md-3 col-sm-6">
                                                <img className="footer-logo" src={logo} alt="logo"/>
                                                <h4>Made by <div className="heart"><FontAwesomeIcon icon={faHeart}/></div> from Lemon Shrimp chefs</h4>
                                                <div className="footer-contact">
                                                        <div className="footer-icon">
                                                                <FontAwesomeIcon icon={faPhone} />
                                                        </div>
                                                        <div className="footer-text">
                                                                <h6>Contact Us</h6>
                                                                <h4>01201301122</h4>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                                <h2>Usefull Link</h2>
                                                <ul>
                                                        <li><Link to="">Home</Link></li>
                                                        <li><Link to="about">About Us</Link></li>
                                                        <li><Link to="contact">Contact US</Link></li>
                                                </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                                <h2>Menu</h2>
                                                <ul>
                                                        <li><Link to="Uramaki">Uramaki</Link></li>
                                                        <li><Link to="Nigiri">Nigiri</Link></li>
                                                        <li><Link to="Hosomaki">Hosomaki</Link></li>
                                                        <li><Link to="Ramen">Ramen</Link></li>
                                                        <li><Link to="Deserts">Deserts</Link></li>
                                                </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                                <h2>Follow Us</h2>
                                                <ul className="social">
                                                        <li><a href="https://www.facebook.com/"><img src={facebook} alt="icon"/></a></li>
                                                        <li><a href="https://web.whatsapp.com/"><img src={whatsapp} alt="icon"/></a></li>
                                                        <li><a href="https://x.com/"><img src={twitter} alt="icon"/></a></li>
                                                        <li><a href="https://www.instagram.com/"><img src={instagram} alt="icon"/></a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                        <div className="sec-footer">
                                <div className="container">
                                        <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                        <span>Copyright @2024 Designed & Developed By Nourhan Saleh</span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </footer>
                </>
        )
}

export default Footer;