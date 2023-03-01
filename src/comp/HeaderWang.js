import React from 'react';
import "./../css/HeaderWang.css";
// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HeaderWang = ({switchTheme, theme}) => {

    return (
        <div className="HeaderWang">
            <a href="/"><h1>YushanWang9801</h1> </a>   
            <nav className="navbar">
                <a as={Link} href="project">Projects</a>
                <a as={Link} href="blog">Blogs</a>
                <a as={Link} href="gallery">Gallery</a>
                <a as={Link} href="me" id="Me">Me</a>
            </nav>
            <div className='dark_mode'>
                <input
                    className='switch'
                    checked = {theme ==="light"}
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={switchTheme}
                />
            </div>
        </div>
    );
}

export default HeaderWang;