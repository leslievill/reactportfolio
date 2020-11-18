import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../Footer/Footer.css";

function Footer(props) {
    return (
    <div>
    <footer>
            <div className="container-fluid padding">
                <div className="row text center">
                    <div className="col-md-4">
                        <hr className="light" color="gray"/>
                            <h5>Leslie V.</h5>
                        <hr className="light" color="gray"/>
                        <p><FontAwesomeIcon icon={faDiceD20}/> Leslie Villatoro</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Bay Area, California</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/> Email: <a href="mailto:levill98@gmail.com?Subject=I%20want%20info" target="_top" id="MainLinks">levill98@gmail.com</a></p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" color="gray"/>
                            <h5>Main Links</h5>
                        <hr className="light" color="gray"/>
                            <p>
                                {/* <a href={props.about} id="MainLinks">About</a> */}
                                <Link id="MainLinks" to="/about">About</Link>
                            </p>
                            <p>
                                {/* <a href="/portfolio" id="MainLinks">Portfolio</a> */}
                                <Link id="MainLinks" to="/portfolio">Portfolio</Link>
                            </p>
                            <p>
                                {/* <a href="/contact" id="MainLinks">Contact</a> */}
                                <Link id="MainLinks" to="/contact">Contact</Link>
                            </p>   
                    </div>
                    <div className="col-md-4">
                        <hr className="light" color="gray"/>
                            <h5>Sites of Interest</h5>
                        <hr className="light" color="gray"/>
                        <p><a href="https://github.com/leslievill" target="_blank" rel="noopener noreferrer" id="SitesOf"><FontAwesomeIcon icon={faGithub}/> Github</a></p>
                        <p><a href="https://soundcloud.com/lessliez" target="_blank" rel="noopener noreferrer" id="SitesOf"><FontAwesomeIcon icon={faSoundcloud}/> Soundcloud</a></p>
                        <p><a href="https://www.instagram.com/metelessazon" target="_blank" rel="noopener noreferrer" id="SitesOf"><FontAwesomeIcon icon={faInstagram}/> Instagram</a></p>
                        <p><a href="https://www.linkedin.com/in/leslievillatoro/"  target="_blank" rel="noopener noreferrer" id="SitesOf"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a></p>

                    </div>
                </div>
            </div>
        <div className="col-12">
            <hr className="light" color="gray"/>
                <h5 id="CopyR">&copy; Leslie Villatoro</h5>
        </div>

    </footer>
    </div>
    )
}

export default Footer;
