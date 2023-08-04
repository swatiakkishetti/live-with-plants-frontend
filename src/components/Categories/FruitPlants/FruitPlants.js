import React, { useRef } from 'react';
import './FruitPlants.css';
import { useNavigate } from 'react-router-dom';

function FruitPlants(props) {
    const iconRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target === iconRef.current) {
            navigate("/fruit-plants");
        }

    };
    return (
        <div className="fruit" onClick={handleClick}>
            <div className="fruit-container">
                <img ref={iconRef} src="/images/Mango Plant.jpeg" className="fruit-icon" alt="Fruit Icon" />
            </div>
            <h6 className="fruit-text">Fruit Plants</h6>
        </div>
    );
}

export default FruitPlants;
