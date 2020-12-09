import React from "react";
import "./index.css"
export default function About() {
    return (
        <main className="container" style={{marginTop: "2rem"}}>
        <h1>Andrew Alvarez - About</h1>
        <h4>Who am I?</h4>
        <p>Born and raised in San Antonio, TX. Grew up interested in the sciences and found myself accelerating in mathematics specifically. From the education industry to the retail industry it has helped me accell in their respected areas. I am now applying the logic and problem solving skills gained from my math studies to apply it to fullstack web developement.</p>

        <h2>Education</h2>
        <p>Bachelor of Arts in Mathematics from the University of North Texas, with a minor in Russian studies.</p>
        <p>Currently enrolled at the University of Texas at San Antonio Coding Bootcamp.</p>
        <h4>Notable Accomplishment</h4>
        <p>Only student, the year of 2002, in the San Antonio Independent School District to receive a 5 on the AP Calculus exam.</p>

        <h2>Social Media</h2>
        <div className="socialGroup">
            <a href="https://github.com/DrewAlvarez" target="blank" title="GitHub">
                <img style={{width: "2rem", marginRight: "3px"}} src="https://cdn1.iconfinder.com/data/icons/social-media-vol-2-1/24/_github_copy-256.png" alt="Github Link"/>
            </a>
            <a href="https://www.linkedin.com/in/andrew-alvarez-32092a1b6/" target="blank" title="LinkIn">
                <img style={{width: "2rem", marginRight: "4px"}} src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-256.png" alt="Facebook Link"/>
            </a>
            <a href="https://twitter.com/alvarezdrew" target="blank" title="Twitter">
                <img style={{width: "2rem"}} src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" alt="Twitter Link"/>
            </a>
        </div>
    </main>
    )
}