import React from 'react';
import "./../css/Mainpage.css";
import "./../css/style.css";
import AboutPage from './AboutPage';
import Footer from './Footer';
import HeaderWang from './HeaderWang';
import Coverpage from './Sections/Coverpage';
import Contact from './Contact';

function Mainpage() {
    return (
        <div className="Mainpage">
            <HeaderWang />
            <Coverpage />
            <AboutPage />
            <Contact />
            <Footer />
        </div>
    );
}

export default Mainpage;