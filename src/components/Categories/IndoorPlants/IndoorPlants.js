import React, { useRef } from 'react';
import './IndoorPlants.css';
import { useNavigate } from 'react-router-dom';

function IndoorPlants() {
    const IconRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target === IconRef.current) {
            navigate("/indoor-plants");
        }
    };

    return (
        <div className="indoor" onClick={handleClick}>
            <div className="indoor-container">
                <img ref={IconRef} src="/images/Jade.jpeg" className="indoor-icon" alt="Indoor icon"></img>
            </div>
            <h6 className='indoor-text'>Indoor Plants</h6>
        </div>
    );
}

export default IndoorPlants;