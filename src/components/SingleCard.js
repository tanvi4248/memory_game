import React from "react";
import "./SingleCard.css";
export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front-img" src={card.src} alt="fimage"></img>
        <img
          className="back-bg"
          src="/img/bg.jpg"
          alt="bimage"
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
}
