import React from 'react';
import "./../css/Mainpage.css";
import "./../css/style.css";
import AboutSection from './Sections/AboutSection';
import Footer from './Footer';
import HeaderWang from './HeaderWang';
import CoverSection from './Sections/CoverSection';
import Contact from './Contact';

function Mainpage() {
    return (
        <div className="Mainpage">
            <HeaderWang />
            <CoverSection />
            <AboutSection />
            <Contact />
            <Footer />
        </div>
    );
}

export default Mainpage;