import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Navbar.css";
import { Link } from "react-router-dom";
import profileImg from "../img/profile.jpg"
import Themetoggle from "./Themetoggle";

const Navbar = () => {
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
                <div className="navbar-profile">
                    <img src={profileImg} alt="profile" />                
                </div>
                
            </div>  

        </div>
    );
};

export default Navbar;