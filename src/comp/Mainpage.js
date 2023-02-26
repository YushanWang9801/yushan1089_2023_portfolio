import React from 'react';
import "./../css/Mainpage.css";
import "./../css/style.css";
import AboutSection from './Sections/AboutSection';
import Footer from './Footer';
import HeaderWang from './HeaderWang';
import CoverSection from './Sections/CoverSection';
import Contact from './Contact';
import NewsSection from './Sections/NewsSection';

function Mainpage() {
    return (
        <div className="Mainpage">
            <CoverSection />
            <AboutSection />
            <NewsSection />
            <Contact />
        </div>
    );
}

export default Mainpage;