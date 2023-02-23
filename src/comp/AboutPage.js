import React from "react";
import NameCard from "./Sections/NameCard";

import ".."
 
function AboutPage(){
    return (
        <div className="AboutPage">
            <div className="aboutLeft">
                <NameCard />
            </div>
            <div className="aboutRight">
                <h1>My Latest</h1>
                <p>
                I recently graduated from University College London, 
                studying my graduate program in Computer Graphics, Vision and Imaging.
                </p> 
                <p>
                I completed my bachelor degrees at University of California, San Diego with a Double Major in Computer Engineering and Applied Mathematics. 
                I graduated in December, 2020.
                </p> 
                <p>
                I worked in IQIYI as a Data Analyst in 2021. 
                I worked at Jiuyang Media as Software Development Engineer intern during summer 2021, 
                and was doing research with NYU Professor Jean-Claude Franchitti. 
                </p>
            </div>
        </div>
    );
}

export default AboutPage;