import React from 'react';
import "./../css/Mainpage.css";
import "./../css/style.css";

import IconBelowImage from './IconBelowImage';

function Mainpage() {
    return (
        <div className="Mainpage">
            <div className="leftpage">
                <div className="circle"></div>
                <IconBelowImage />
            </div>
            <div className="rightpage">
            </div>
        </div>
    );
}

export default Mainpage;