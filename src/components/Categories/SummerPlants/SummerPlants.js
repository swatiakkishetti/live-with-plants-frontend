import React, { useRef } from 'react';
import './SummerPlants.css';
import { useNavigate } from 'react-router-dom';


function SummerPlants() {
    const iconRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target === iconRef.current) {
            navigate("/summer-plants");
        }
    };

    return (
        <div>
            <div className="summer" onClick={handleClick}>
                <div className="summer-container">
                    <img ref={iconRef} src="/images/Gerbera Daisies.jpeg" className="summer-icon" alt="Summer Icon" />
                </div>
                <h6 className="summer-text">Summer Plants</h6>
            </div>
        </div>
    );
}

export default SummerPlants;
