import React from "react"
import './NextHeader.css'
import Logo from "../../images/logo-icon.png";
import Profile from "../../images/profile-icon.png";

function NextHeader() {
    return (
        <div>
            <nav className="nav-logo">
                <img src={Logo} alt="logo" className="logo" ></img>
                <h4 className="logo-header" >Live With Plants</h4>
                <form className="navigation-search">
                    <input type="text" className="navigation-search-input"
                        placeholder="Search..." />
                    <button className="navigation-search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <img src={Profile} alt="profile" className="profile-icon"></img>
            </nav>
        </div>
    );
}

export default NextHeader;