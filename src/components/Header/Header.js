import React from "react"
import './Header.css'
import FacebookLogo from '../../images/facebook.png'
import InstagramLogo from '../../images/instagram.png'
import TwitterLogo from '../../images/twitter.png'
import PinterestLogo from '../../images/pinterest.png'

export default function Header() {
    return (
        <div>
            <nav>
                <h4 className="feedback">Feedback</h4>
                <h4 className="reports">Reports</h4>
                <h4 className="franchise">Franchise</h4>
                <img src={FacebookLogo} className="facebook"></img>
                <img src={InstagramLogo} className="instagram"></img>
                <img src={TwitterLogo} className="twitter"></img>
                <img src={PinterestLogo} className="pinterest"></img>
                
            </nav>
        </div>
    )
}