import React, { Component } from "react";
import ProfileCard from "../components/ProfileCard";
import Project from "../components/Project"
import projects from "../projectArray.json"

class Home extends Component {
    state= {
        results: []
    };

    componentDidMount() {
        this.handleViewGroupProjects();
    }

    handleViewGroupProjects = event => {
        let groupProjects = []

        for(var i =0; i < projects.length; i++){
            if(projects[i].groupProject){
                groupProjects.push(projects[i])
            }
        }
        this.setState({results: groupProjects})
    }

    render() {
        return(
            <div style={{margin: "2rem 0 5rem 0"}}>
                <div className="container">
                    <ProfileCard />
                    <div style={{float: "left"}}>
                        <Project results={this.state.results}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;