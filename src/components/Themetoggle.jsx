import React from "react";
import "./Themetoggle.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";


const Themetoggle = () => {

    const [theme, setTheme] = useState(false);

    const toggleTheme = () => setTheme(!theme);



    
    return (
        <div className="theme-container">
            <div className="themetoggle-main">

                
                <div className={theme ? "theme light" : "theme dark"} onClick={toggleTheme}>
                    {theme ?(<Link> <MdOutlineLightMode /></Link>) : (<Link><MdOutlineDarkMode /></Link>)}
                    
                </div>
        
            </div>
        </div>
    );
}

export default Themetoggle;