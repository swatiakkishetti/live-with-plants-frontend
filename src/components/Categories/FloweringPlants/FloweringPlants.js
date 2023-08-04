import React, { useRef } from 'react';
import './FloweringPlants.css';
import { useNavigate } from 'react-router-dom';

function FloweringPlants(props) {
    const iconRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target === iconRef.current) {
            navigate("/flowering-plants");
          }
    };
        return (
            <div className="flowering" onClick={handleClick}>
                <div className="flowering-container">
                    <img  ref={iconRef} src="/images/Hibiscus.jpeg" className="flowering-icon" alt="Flowering Icon" />
                </div>
                <h6 className="flowering-text">Flowering Plants</h6>
            </div>
        );
    }

export default FloweringPlants;
