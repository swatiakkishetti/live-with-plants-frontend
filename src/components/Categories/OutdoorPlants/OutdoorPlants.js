import React, { useRef } from 'react';
import './OutdoorPlants.css';
import { useNavigate } from 'react-router-dom';

function OutdoorPlants(props) {
    const iconRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target === iconRef.current) {
            navigate("/outdoor-plants");
        }
    };

    return (
        <div className="outdoor" onClick={handleClick}>
            <div className="outdoor-container">
                <img ref={iconRef} src="/images/Agave.jpeg" className="outdoor-icon" alt="Summer Icon" />
            </div>
            <h6 className="outdoor-text">Outdoor Plants</h6>
        </div>
    );
}

export default OutdoorPlants;
