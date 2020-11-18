import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Contact/ContactForm.css";

function ContactForm() {
    return (
        <div className="container-md">
        <div className="jumbotron" id="contact">
            <h1 className="display-4" id="disp5">Get In Touch!</h1>
            <hr className="light" color="white"/>
            <div className="container contact-form">
                <div className="row">
                    <div className="col-md-6">
                        <p><FontAwesomeIcon icon={faDiceD20}/> Leslie Villatoro</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Bay Area, California</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/> Email: <a href="mailto:levill98@gmail.com?Subject=I%20want%20info" target="_top" id="MainLinks">levill98@gmail.com</a></p>

                        <div className="row text-center padding" id="socialnet">
                            <div className="col-md-3 social padding">
                                <a href="https://github.com/leslievill"target="_blank" rel="noopener noreferrer"><i className="fa fa-github" id="facebook"></i></a>
                            </div>
                            <div className="col-md-3 social padding">
                                <a href="https://www.linkedin.com/in/leslievillatoro/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" id="instagram"></i></a>                            
                            </div>    
                        </div>    

                        <div className="row text-center padding" id="socialnet">
                            <div className="col-md-3 social padding">
                                <a href="https://soundcloud.com/lessliez" target="_blank" rel="noopener noreferrer"><i className="fa fa-soundcloud" id="soundcloud"></i></a>
                            </div>
                            <div className="col-md-3 social padding">
                                <a href="https://www.instagram.com/metelessazon" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" id="instagram"></i></a>                            
                            </div>    
                        </div>    

                    </div>
                        <div className="col-md-6">
                            <form name="contact"  action="/" method="post" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact"/>
                                <div className="form-group">
                                    <label>Name</label>
                                        <input required type="text" name="name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                        <input required type="email" name="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                        <textarea name="message" className="form-control" rows="5"></textarea>
                                </div>
                                <div data-netlify-recaptcha="true"></div>
                                <div className="form-group">
                                    <button className="btn btn-outline-light btn-block btn-lg" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default ContactForm;