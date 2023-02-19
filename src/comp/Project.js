import React from 'react';

import HeaderWang from './HeaderWang';
import Footer from './Footer';
import ProjectTitle from './Projects/ProjectTitle';

function Project () {

    return (
        <div className="project">
            <HeaderWang />
            <ProjectTitle />
            <Footer />
        </div>
    );
}

export default Project;