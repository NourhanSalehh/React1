import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./banner.css"

function Banner (props){
        return(
                <>
                <section className="banner">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                                <h2>{props.title} </h2>
                                                <li>
                                                        <Link to="/">
                                                                <FontAwesomeIcon icon={faHome} />home
                                                        </Link>
                                                        / {props.smtitle}
                                                </li>
                                        </div>
                                </div>
                        </div>
                </section>
                </>
        )
}

export default Banner;