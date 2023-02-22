import React from 'react';
import "./../css/Mainpage.css";
import "./../css/style.css";
import Footer from './Footer';
import HeaderWang from './HeaderWang';
import Coverpage from './Sections/Coverpage';
import NameCard from './Sections/NameCard';

function Mainpage() {
    return (
        <div className="Mainpage">
            <HeaderWang />
            <Coverpage />
            <NameCard />
            <Footer />
        </div>
    );
}

export default Mainpage;