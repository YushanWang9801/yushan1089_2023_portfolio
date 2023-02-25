import React from "react";
import HeaderWang from "./HeaderWang";
import Footer from "./Footer";

// const pageData = {"name" : "Face Mask Detector",
//     "title": "COVID Face Mask Detector",
//     "Abstract": 
//     "Due to the outbreak of COVID-19 in early 2020, the governments around the world require their citizens to wear face masks outdoors and indoors when encountering other people. This serves both as a protection to the health of people and as a prevention of further spread of the disease. As we have learned from COGS 181, Convolution Neural Networks has achieved great success in image recognition and processing, and in this paper, we used CNN as a binary classiﬁer to classify whether people are wearing a face mask or not in photos and videos. There are two different datasets and two different CNN designs used. We used the best training model as the prediction model to develop a program that allows the camera to capture the faces of individuals and identify whether they are wearing face masks or not.",
//     "content": []
// }  

import "../css/AboutPage.css";

function AboutPage() {
    return (
        <div className="AboutPage">
            <HeaderWang />
            <AboutSection />
            <Footer />
        </div>
    );
}


function AboutSection(){
    return (
	<div>
		<h1>
			<span class="focusing">Brief STORY</span> 
			<span class="the">of</span> 
			<span class="heart">Me, MYSELF & i</span>
		</h1>
        <article>
			{/* <cite>
					by <span class="name">Jay Wamsley</span> | 
					Photos by <span class="name">Jay Drowns</span>
				</cite> */}
			<aside>Fabio Sagebin is currently in the final year of a residency at the University of Rochester Medical Center.</aside>
			<img src="./DSC_7789.jpg" />
			<main>
				<p><span class="dropcap">A dozen</span> years ago, soon-to-be UVU student Fabio Sagebin was doing research - on whether or not higher education was for him and, if so, where he should enroll. A dozen years from now, Dr. Sagebin will again likely be doing research - this time on better ways to repear hearts.</p>
				<p>Currently a member of the University of Rochester Medical Center's cardiothoracic surgery integrated residency program, Sagebin says a decade ago, he was "fully intending to finish high school, go on a mission, and come home and work construction with my dad." His family - who had emigrated when he was 3 years old to Utah from a small city in southern Brazil, near the Uruguayan border - had begun a successful business, building steel-frame homes. His mission for The Church of Jesus Christ of Latter-Day Saints had taken him to New York City, specifically Brooklyn and Queens.</p>
				<p>A visit with his mission president "changed the trajectory for me," Sagebin remembers. "I worked closely with my mission president, and during that mentorship he planted the seed that I really needed a formal education.</p>
				<p>"Unfortunately, I had not really prepared for that at that point. My parents were wonderful people, hardworking people, but we didn't have the social infrostructure necessary for college prep. It was not something that was inculcated in my family culture. I didn't take the SAT of the ACT, and I really hadn't prepared for college. So, when I came home, I just looked for an open-enrollment college."</p>
			</main>
        </article>
	</div>
    );
}

export default AboutPage;