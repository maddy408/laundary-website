
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../Womenlist/Womencard.css';
import { Link } from 'react-router-dom';

const Womencard = ({ image, title, description, buttonText }) => {
    const [count, setCount] = useState(1);

    return (
        <div className="flex">
            <img className="womencardimg1" src={image} alt={title} />
            <div className="contentof">
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
            <div className="counter-container">
                <button
                    className="counter-button left"
                    onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                >
                    −
                </button>
                <span className="counter-value">{count}</span>
                <button
                    className="counter-button right"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    +
                </button>
            </div>
        <Link to={"/book"}> <Button  className='womenbtn'
                size="large" 
                style={{ marginTop: 200, marginLeft: 220, borderRadius: 2, backgroundColor: '#003366' }} 
                variant="contained"
            >
                {buttonText}
            </Button></Link>
        </div>
    );
};

const Womenlist = () => {
    const womenCardsData = [
        {
            image: "/womencard1.png",
            title: "Silk Saree Wash",
            description: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy",
            buttonText: "Book Now"
        },
        {
            image: "/womencard2.png",
            title: "Chudithar Wash",
            description: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy",
            buttonText: "Book Now"
        },
        {
            image: "/womencard3.png",
            title: "Women Tshirt Wash",
            description: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy",
            buttonText: "Book Now"
        },
        
    ];

    return (
        <div>
            {womenCardsData.map((card, index) => (
                <Womencard 
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                />
            ))}
        </div>
    );
};

export default Womenlist;
