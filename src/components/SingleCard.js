import React from "react";
import "./SingleCard.css";
export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front-img" src={card.src} alt="fimage"></img>
        <div className="back-bg" onClick={handleClick}></div>
      </div>
    </div>
  );
}
