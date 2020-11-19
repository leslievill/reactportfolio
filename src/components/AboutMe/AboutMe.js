import React from "react";
import "../AboutMe/AboutMe.css";



function AboutMe() {
    return (
<div className="container-fluid" id="AboutMeCont">
    <div className="container padding" id="jumbo">
        <div className="jumbotron">
            <h1 className="display-4" id="About">About Me </h1>
            <hr className="light" color="black"/>

            <div className="row">
                <div className="col-lg-3">
                    <img className="img img-thumbnail" alt="myPicture" src="https://github.com/leslievill/reactportfolio/blob/main/public/images/leslie.png?raw=true"/>  
                </div>
                <div className="col-lg-9" id="aboutmep">
                <p>Hello, my name is Leslie Villatoro and I am studying to become a Full Stack Web Developer.
                      <p>I´m currently studying at the UC Berkeley extension Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, and React.</p>
                      <p> I have a Bachelor's degree in Sociology from the University of California, Los Angeles. With this program I hope to incorporate both my technical skills in coding as well as my critical thinking skills from Sociology and hope to find a job that will allow me to put both to the test.
                        Feel free to check out my resume linked below, where you will find my wide range of experiences I've had in previous jobs</p>
                      
                      <p>Thank you for exploring my portfolio.</p>
                      I've included some of my favorite projects as well as my contact information. I look forward to hearing from you soon!
                      </p>
                      
                    
                </div>    
            </div>
        </div>
    </div> 
</div>      

    )
}

export default AboutMe;