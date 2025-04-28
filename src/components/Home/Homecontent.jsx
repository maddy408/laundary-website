import React, { useState, useEffect } from "react";
import "../Style/Homecontent.css";
import Service from '../Home/Service';
import Choose from '../Home/Choose';
import Work from '../Home/Work';
import Screen from '../Home/Screen';
import { Link } from "react-router-dom";

const slides = [
    {
        image: "/images/frontpage1.png",
        title: "Laundry & Dry Cleaning <br/> Pick Up & Delivery",
        description:
            "Lorem Ipsum has been the industry's standard dummy <br/> text ever since the 1500s, when an unknown printer <br/> took a galley of type and scrambled it to make.",
        className: "small-image",
    },
    {
        image: "/images/backgroundfront.png",
        title: "Laundry & Dry Cleaning <br/> Pick Up & Delivery",
        description:
            "Lorem Ipsum has been the industry's standard dummy <br/> text ever since the 1500s, when an unknown printer <br/> took a galley of type and scrambled it to make.",
        className: "full-image",
    },
];

const Homecontent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <div className="carousel-container">
                <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out', display: 'flex', width: `${slides.length * 100}%` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="carousel-slide" style={{ flex: '0 0 100%' }}>
                            <img src={slide.image} alt="Slide" className={`slide-image ${slide.className}`} />
                            <div className="slide-text">
                                <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
                                <p dangerouslySetInnerHTML={{ __html: slide.description }} />
                                <Link to="/pricing"> <button className="cta-button">Pick up / Delivery</button> </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="prev-button" onClick={prevSlide}>❮</button>
                <button className="next-button" onClick={nextSlide}>❯</button>
            </div>
            <Service />
            <Choose />
            <Work />
            <Screen />
        </>
    );
};

export default Homecontent;
