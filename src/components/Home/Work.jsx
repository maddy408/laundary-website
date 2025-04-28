import React from 'react';
import '../Style/work.css';
import Workcard from './Workcard';

const cardsData = [
  { title: "Book", description: "Easily book our service just by sending a WhatsApp message to +919944008811.", imageUrl: "./images/work1.png" },
  { title: "Collect", description: "We offer a flawless Pickup process that can be customized for each customer’s convenience.", imageUrl: "./images/work2.png" },
  { title: "Clean", description: "We handle your clothes on Imported machines for better care, using safe detergents.", imageUrl: "./images/work3.png" },
  { title: "Deliver", description: "Premium service shall be returned within 24 hours. Quick and Fast Delivery.", imageUrl: "./images/work4.png" },
];

const Work = () => {
  return (
    <div className='work-wrapper'>
      <div className='div'>
        <h1 className='workhead'>Our Work Process</h1>
        <h5 className='worksubhead'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </h5>
      </div>

      {/* Card layout wrapper */}
      <div className="workcard-container">
        {cardsData.map((card, index) => (
          <Workcard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
