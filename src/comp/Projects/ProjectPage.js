import React from "react";
import HeaderWang from "../HeaderWang";
import Footer from "../Footer";

const pageData = {"name" : "Face Mask Detector",
    "title": "COVID Face Mask Detector",
    "Abstract": 
    "Due to the outbreak of COVID-19 in early 2020, the governments around the world require their citizens to wear face masks outdoors and indoors when encountering other people. This serves both as a protection to the health of people and as a prevention of further spread of the disease. As we have learned from COGS 181, Convolution Neural Networks has achieved great success in image recognition and processing, and in this paper, we used CNN as a binary classiﬁer to classify whether people are wearing a face mask or not in photos and videos. There are two different datasets and two different CNN designs used. We used the best training model as the prediction model to develop a program that allows the camera to capture the faces of individuals and identify whether they are wearing face masks or not.",
    "content": []
}  



function ProjectPage({pageData}) {
    return (
        <div className="ProjectPage">
            <HeaderWang />
            <Footer />
        </div>
    );
}

export default ProjectPage;