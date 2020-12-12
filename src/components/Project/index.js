import React from "react";

export default function Project(props) {
    return (
        <div>
            {props.results.map(result => (
                <div className="card border-primary mb-3" style={{maxWidth: "20rem", height:"40rem", float: "left", marginLeft: "2rem"}}>
                    <div className="card-header">{result.appName}</div>
                    <img src={`images/${result.imgName}.png`} className="card-img-top" alt={result.imgName}/>
                    <div className="card-body">
                        <p className={"card-text"}>{result.description}</p>
                    </div>
                    <div className="car-body">
                        <a href={result.appUrl} className="btn btn-primary" style={{width: "90%", marginBottom: ".25rem"}}>App URL</a>
                        <a href={result.appRepo} className="btn btn-primary" style={{width: "90%"}}>Repo URL</a>
                    </div>
                </div>
            ))}
        </div>
    )
}