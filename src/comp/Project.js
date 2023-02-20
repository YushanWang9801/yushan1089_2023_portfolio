import React from 'react';

import HeaderWang from './HeaderWang';
import Footer from './Footer';
import "../css/Project.css";

import ProjectTitle from './Projects/ProjectTitle';
import ProjectCard from './Projects/ProjectCard';

import projects from "./Projects/projects.json"; 

function Project () {

    return (
        <div className="project">
            <HeaderWang />
            <ProjectTitle />
            {projects.map(project => (
                <ProjectCard proj={project}/>
            ))}
            {projects.map(project => (
                <ProjectCard proj={project}/>
            ))}
            <Footer />
        </div>
    );
}

export default Project;