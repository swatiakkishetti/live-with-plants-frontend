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
                <img src={Icon1} alt="product" className="image"></img>
                <img src={Icon2} alt="product" className="image"></img>
                <img src={Icon3} alt="product" className="image"></img>
                <img src={Icon4} alt="product" className="image"></img>
                <img src={Icon5} alt="product" className="image"></img>
                <img src={Icon6} alt="product" className="image"></img>
            </div>
        </div>
    );
}