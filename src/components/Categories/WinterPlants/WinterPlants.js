import React, { useRef } from 'react';
import './WinterPlants.css';
import { useNavigate } from 'react-router-dom';



function WinterPlants() {
    const IconRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target === IconRef.current) {
            navigate("/winter-plants");
        }
    };
        return (
            <div className="winter" onClick={handleClick}>
                <div className="winter-container">
                    <img ref={IconRef} src="/images/Verbena.jpeg" className="winter-icon" alt="Winter Icon" />
                </div>
                <h6 className='winter-text'>Winter Plants</h6>
            </div>
        );
}

export default WinterPlants;
