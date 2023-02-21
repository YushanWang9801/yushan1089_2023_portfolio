import React from 'react';
import HeaderWang from '../HeaderWang';
import Footer from '../Footer';
import "./SingleBlog.css";

function SingleBlog () {
    let blog = {
        "name" : "love letter",
        "content": [
            {   "item" : "text",
                "info" : "shunji Iwai xxxxxxxx",
                "delay": 10}
        ]
    }


    return (
        <div className="SingleBlog">
            <HeaderWang />
            <div className="content">
                <div className="has-animation animation-ltr" delay="10">
                    <p className="bigger">{blog.name}</p>
                </div>
                <div className="has-animation animation-rtl" delay="1000">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="has-animation animation-ltr" delay="1500">
                    <p className="text txt-center">V2 
                    Scroll Reveal Animation 
                    </p>
                </div>
                <div className="has-animation animation-rtl" delay="2000">
                    <img src="https://images.prismic.io/figaroimmo/943be1d1-6e3a-4c59-a5f1-97ce8b6ea147_lyon-confinement.jpg?auto=compress,format&rect=0,0,1000,667&w=720&h=480" width="600" />
                </div>
                <div className="has-animation animation-ltr" delay="4000">
                    <p className="bigger">END ☺</p>
                </div>
            </div>
            <Footer />        
        </div>
    );
}
export default SingleBlog;