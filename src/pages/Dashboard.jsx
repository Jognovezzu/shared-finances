import React from "react";
import "../style/Pages.css";
import "../style/Dashboard.css";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";



const Dashboard = () => {
    const resumeItems = [
        {
            title: "Balance",
            value: 1500.00,
            currency: "USD",
            icon: <FaMoneyBillWave />,
            cName: "resume-balance"
        },
        {
            title: "Income",
            value: 1500.00,
            currency: "USD",
            icon: <FaArrowCircleDown />,
            cName: "resume-income"
        },
        {
            title: "Expense",
            value: 1500.00,
            currency: "USD",
            icon: <FaArrowCircleUp />,
            cName: "resume-expense"
        },
        {
            title: "Savings",
            value: 1500.00,
            currency: "USD",
            icon: <MdOutlineAccountBalanceWallet />,
            cName: "resume-savings"
        },
    ]
    return (
        <div className="main-dashboard">
            <h2>
                Dashboard
            </h2>
            <p>
                Welcome to the dashboard, Messi.
            </p>
            <div className="resume-dashboard">
                <ul className="resume-ul">
                    {resumeItems.map((item, index) => (
                        <li key={index}>
                            <div className="resume-item ">
                                <div className={item.cName}>
                                    {item.icon}
                                </div>
                                <div className="resume-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.value} {item.currency}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
            <div>
                <h3> Actual balance</h3>
            </div>
            
        </div>
    );
};

export default Dashboard;