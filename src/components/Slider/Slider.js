import React from "react";
import './Slider.css';
import Icon1 from "../../images/category-icon.png";
import Icon2 from "../../images/slide-image-2.jpeg";
import Icon3 from "../../images/slide-image-3.jpeg";
import Icon4 from "../../images/slide-image-4.jpeg";
import Icon5 from "../../images/slide-image-5.webp";
import Icon6 from "../../images/slide-image-6.webp";

export default function Slider() {
    return (
        <div className="slide">
            <div className="wrapper">
                <img src={Icon1} alt="icon1" className="image"></img>
                <img src={Icon2} alt="icon2" className="image"></img>
                <img src={Icon3} alt="icon3" className="image"></img>
                <img src={Icon4} alt="icon4" className="image"></img>
                <img src={Icon5} alt="icon5" className="image"></img>
                <img src={Icon6} alt="icon6" className="image"></img>
            </div>
        </div>
    );
}