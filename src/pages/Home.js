import React, { Component } from "react";
import ProfileCard from "../components/ProfileCard";
import Project from "../components/Project"
import ProjectButtons from "../components/ProjectButtons"
import projects from "../projectArray.json"
import "./index.css"


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

    handleViewAllProjects = () => {
        let soloProjects = []

        for(var i =0; i < projects.length; i++){
            if(!projects[i].groupProject){
                soloProjects.push(projects[i])
            }
        }
        this.setState({results: soloProjects})    }

    render() {
        return(
            <main>
                <div className="container">
                    <div className="profileEl">
                        <ProfileCard />
                    </div>
                    <div className="projectEl">
                        <div>
                            <ProjectButtons handleOnClick={this.handleViewGroupProjects} btnName="View Group Projects" />
                            <ProjectButtons handleOnClick={this.handleViewAllProjects} btnName="View Solo Projects" />
                        </div>
                        <div className="projectCards">
                            <Project results={this.state.results}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home;