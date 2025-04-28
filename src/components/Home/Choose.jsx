import React from 'react'
import '../Style/Choose.css'
import Choosecard from './Choosecard';

const cardsData = [
  {
    title: "100% CUSTOMER SATISFACTION",
    description: "Every job we undertake guarantees the best quality with strict adherence to timelines. The satisfaction of the customer is paramount to our institution",
    imageUrl: "./images/card1.png"
  },
  {
    title: "QUALITY",
    description: "With the best-in-class cleaning process and trained personnel, we guarantee the customers quality on every order.",
    imageUrl: "./images/card2.png"
  },
  {
    title: "TRAINED PERSONNEL",
    description: "All the members of our team are carefully selected and given technical training before initiating them into the service.",
    imageUrl: "./images/card3.png"
  },
  {
    title: "AFFORDABLE PRICING",
    description: "Every job we undertake guarantees the best quality with strict adherence to timelines. The satisfaction of the customer is paramount to our institution",
    imageUrl: "./images/card4.png"
  },
  {
    title: "WORLD CLASS DRY-CLEAN",
    description: "With the best-in-class cleaning process and trained personnel, we guarantee the customers quality on every order.",
    imageUrl: "./images/card5.png"
  },
  {
    title: "BEST TECHNOLOGY AND MACHINERY",
    description: "All the members of our team are carefully selected and given technical training before initiating them into the service.",
    imageUrl: "./images/card6.png"
  }
];

const Choose = () => {
  return (
    <div>
      <div className='choose-container'>
        <h1 className='mainhead'>Why Choose Us</h1>
        <h5 className='subhead'>Lorem Ipsum has been the industry's standard dummy text</h5>
      </div>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Choosecard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Choose;
