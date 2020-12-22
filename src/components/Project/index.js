import React from "react";

export default function Project(props) {
    return (
        <div>
            {props.results.map(result => (
                <div className="card border-primary mb-3" style={{maxWidth: "20rem", height:"40rem", float: "left", marginRight: "2rem"}}>
                    <div className="card-header">{result.appName}</div>
                    <img src={`images/${result.imgName}.png`} className="card-img-top" alt={result.imgName}/>
                    <div className="card-body">
                        <p className={"card-text"}>{result.description}</p>
                    </div>
                    <div className="card-body">
                        <a href={result.appUrl} className="btn btn-primary" style={{width: "90%", margin: "0 0 .25rem 1rem"}}>App URL</a>
                        <a href={result.appRepo} className="btn btn-primary" style={{width: "90%", margin: "0 0 1rem 1rem"}}>Repo URL</a>
                    </div>
                </div>
            ))}
        </div>
    )
}