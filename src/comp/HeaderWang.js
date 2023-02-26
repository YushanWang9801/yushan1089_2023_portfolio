import React from 'react';
import "./../css/HeaderWang.css";
import { useState, useEffect } from 'react';

// const HeaderWang = ({ setDarkMode, darkMode }) => {
const HeaderWang = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || true);
    const [theme, setTheme] = useState( localStorage.getItem('theme') || 'dark');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setDarkMode(true);
        } else {   
            setTheme('light');
            setDarkMode(false);
        }
    };
    
    useEffect(() => {
        document.querySelector("body").setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme);
        localStorage.setItem('darkMode', darkMode);
    }, [theme]);
    
    return (
        <div className="HeaderWang">
            <a href="/"><h1>YushanWang9801</h1> </a>   
            <nav className="navbar">
                <a href="project">Projects</a>
                <a href="blog">Blogs</a>
                <a href="gallery">Gallery</a>
                <a href="me" id="Me">Me</a>
            </nav>
            <div className='dark_mode'>
                <input
                    className='switch'
                    checked={darkMode}
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={toggleTheme}
                />
            </div>
        </div>
    );
}

export default HeaderWang;