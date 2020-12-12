import React from "react";

export default function ProjectButtons(props) {
    return (
        <div style={{float: "left", margin: "0 0 2rem 0"}}>
            <button type="button" className="btn btn-outline-primary" onClick={props.handleOnClick}>{props.btnName}</button>
        </div>
    )
}