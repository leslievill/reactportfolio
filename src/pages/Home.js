import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/AboutMe/AboutMe";

function Home() {
    return(
        <div className="container-fluid">
            <Navbar/>
            <AboutMe/>
            <Footer/>
        </div>
    )
}

export default Home;