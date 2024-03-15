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
            name: "Group",
            path: "/group",
            icon: <FaUserGroup />,
            cName: "nav-text"
        },
        {
            name: "Income",
            path: "/income",
            icon: <FaDollarSign />,
            cName: "nav-text"
        },
        
        {
            name: "Goal",
            path: "/goals",
            icon: <FaCrosshairs />,
            cName: "nav-text"
        },
        
        {
            name: "Report",
            path: "/report",
            icon: <FaChartLine />,
            cName: "nav-text"
        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />,
            cName: "nav-text"
        },
        {
            name: "About",
            path: "/about",
            icon: <FaCode />,
            cName: "nav-text"
        },
        
        

    ]

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="sidebar">
            <div  className={(sidebar) ? "menu-bars svgdisable" : "menu-bars"}>
                <Link to="#" className="FaBar" >
                <FaBars onClick={showSidebar} />
                </Link>
                <ul className="nav-menu-showed" >
                    {SideBarItem.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div className="menu-bars">

                        <Link to="#">
                            <AiOutlineClose onClick={showSidebar} />
                        </Link>
                    <ul className="nav-menu-showed" >
                    {SideBarItem.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} onClick={showSidebar}>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            </nav>
            
        </>
    );
};


export default Sidebar;