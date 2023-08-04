import React from "react"
import './Header.css'
import { FacebookIcon, FacebookShareButton } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon } from 'react-share';

export default function Header() {
    return (
        <div>
            <div className="navbar">
                <div className="menu-items">
                    <h4 className="feedback">Feedback</h4>
                    <h4 className="reports">Reports</h4>
                    <h4 className="franchise">Franchise</h4>
                </div>

                <ul className="social-icons">
                    <li>
                        <FacebookShareButton className="icon">
                            <FacebookIcon size={28} round />
                        </FacebookShareButton>
                    </li>
                    <li>
                        <TwitterShareButton className="icon">
                            <TwitterIcon size={28} round />
                        </TwitterShareButton>
                    </li>

                    <li>
                        <WhatsappShareButton className="icon">
                            <WhatsappIcon size={28} round />
                        </WhatsappShareButton>
                    </li>

                    <li>
                        <PinterestShareButton className="icon">
                            <PinterestIcon size={28} round />
                        </PinterestShareButton>
                    </li>

                </ul>
            </div>
        </div>
    )
}