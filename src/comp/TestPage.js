import React from "react";
import HeaderWang from "./HeaderWang";
import  "./test.css";
import { ReactComponent as Test } from "./test.svg";

function TestPage(){


    return (
        <div >
			<HeaderWang />
			<Test />
        </div>
    );
}

	// const setDarkTheme = () => {
    //     document.querySelector("body").setAttribute("data-theme", "dark");
    //     setDarkMode(true);
    // };

    // const setLightTheme = () => {
    //     document.querySelector("body").setAttribute("data-theme", "light");
    //     setDarkMode(false);
    // };

    // const toggleTheme = (e) => {
    //     if (e.target.checked) setDarkTheme();
    //     else setLightTheme();
    // };

export default TestPage;
