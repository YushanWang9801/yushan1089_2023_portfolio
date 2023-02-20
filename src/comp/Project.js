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
            <div className='project-grid'>
                {projects.map(project => (
                    <ProjectCard proj={project}/>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Project;