import React from "react";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
    return(
        <div style={{marginTop: "2rem"}}>
            <div className="container">
            <ProfileCard />
            </div>
        </div>
    )
}