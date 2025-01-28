import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
const cardImages = [
  { src: "/img/apple.png", matched: false },
  { src: "/img/banana.png", matched: false },
  { src: "/img/grapes.png", matched: false },
  { src: "/img/guava.png", matched: false },
  { src: "/img/orange.png", matched: false },
  { src: "/img/plum.png", matched: false },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChioceOne] = useState(null);
  const [choiceTwo, setChioceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  //suffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChioceOne(null);
    setChioceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChioceTwo(card) : setChioceOne(card);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("those cards do not match");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChioceOne(null);
    setChioceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          ></SingleCard>
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
