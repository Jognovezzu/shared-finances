import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCrosshairs } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


import "./Sidebar.css";

const Sidebar = () => {
    const SideBarItem = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
            cName: "nav-text"
        },
        {
            name: "About",
            path: "/about",
            icon: <FaCode />,
            cName: "nav-text"
        },
        {
            name: "Group",
            path: "/group",
            icon: <FaUserGroup />,
            cName: "nav-text"
        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />,
            cName: "nav-text"
        },
        {
            name: "Goal",
            path: "/goals",
            icon: <FaCrosshairs />,
            cName: "nav-text"
        },
        {
            name: "Income",
            path: "/income",
            icon: <FaDollarSign />,
            cName: "nav-text"
        },
        {
            name: "Report",
            path: "/report",
            icon: <FaChartLine />,
            cName: "nav-text"
        }
        

    ]

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="sidebar">
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" >
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiOutlineClose />
                    </Link>
                </li>
                {SideBarItem.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
            
        </>
    );
};


export default Sidebar;