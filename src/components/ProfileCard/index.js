import React from "react";
import pic from "../../images/me1112.jpg"

export default function ProfileCard() {
    return (
        <div className="card text-white bg-dark" style={{width: "16rem"}}>
            <img src={pic} className="card-img-top" alt="..."/>
            <div className="card-body text-white">
                <h5 className="card-title">Andrew Alvarez</h5>
                <p className="card-text">Welcome to a collection of my applications. This page features group projects I have worked on. Click the images to view the app or repository. Click below for more projects and Personal information.</p>
                <a href="about" className="btn btn-primary" style={{width: "90%", marginBottom: ".25rem"}}>More about me</a>
                <a href="contact" className="btn btn-primary" style={{width: "90%"}}>Contact Me</a>
            </div>
        </div>
    )
}