import React from 'react';
import Typed from "react-typed";

import "../../css/Project.css";

function ProjectTitle() {
    return (
        <div className='ProjectTitle'>
            <h2>My Projects</h2>
            <div className="animated-typing">
            <Typed
            strings={["Hello, Here is a summary of my projects.",]}
                typeSpeed={80}
                backSpeed={40}
                loop />
            </div>
        </div>
    );
}

export default ProjectTitle;