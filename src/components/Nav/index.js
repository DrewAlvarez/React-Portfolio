import React from "react";

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <!-- <a className="navbar-brand" href="#">Navbar</a> --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{paddingLeft: "10%"}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="React-Portfolio/#/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="React-Portfolio/#/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="React-Portfolio/#/resume">Resumé</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="React-Portfolio/#/contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
    )
}