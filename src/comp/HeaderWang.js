import React from 'react';
import "./../css/HeaderWang.css";

const HeaderWang = ({ setDarkMode }) => {
    const setDarkTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        setDarkMode(true);
    };

    const setLightTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        setDarkMode(false);
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkTheme();
        else setLightTheme();
    };



    return (
        <div >
        <div className="HeaderWang">
            <h1>YushanWang9801</h1>    
            <nav className="navbar">
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Blogs</a>
                <a href="#">Gallery</a>
            </nav>
        </div>

        <div className='dark_mode'>
        <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
        />
        <label className='dark_mode_label' for='darkmode-toggle'>
        </label>
        </div>
        </div>
    );
}

export default HeaderWang;