import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Navbar.css";
import { Link } from "react-router-dom";
import profileImg from "../img/profile.jpg"
import Themetoggle from "./Themetoggle";

const Navbar = () => {

    const[profileOpt,setprofileOpt] = useState(false)
    const toggleProfile = () => setprofileOpt(!profileOpt);
    
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/dashboard">
                <h2>LOGO</h2>
                </Link>
            </div>
            <Themetoggle />
            <div className="navbar-menu">
                <div className="navbar-notif">
                    <IoMdNotificationsOutline />
                </div>
                <div className="navbar-profile" onClick={toggleProfile}>
                    <img src={profileImg} alt="profile" />     
                    <div className={profileOpt ? "profile-options": "profile-options hide"}>
                        <ul>
                            <li><Link to="#">Profile</Link></li>
                            <li><Link to="#">Settings</Link></li>
                            <li><Link to="#">Logout</Link></li>
                        </ul>
                    </div>           
                </div>
                
            </div>  

        </div>
    );
};

export default Navbar;