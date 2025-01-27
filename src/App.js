import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
const cardImages = [
  { src: "/img/apple.png" },
  { src: "/img/banana.png" },
  { src: "/img/grapes.png" },
  { src: "/img/guava.png" },
  { src: "/img/orange.png" },
  { src: "/img/plum.png" },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChioceOne] = useState(null);
  const [choiceTwo, setChioceTwo] = useState(null);
  //suffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChioceTwo(card) : setChioceOne(card);
  };
  const resetTurn = () => {
    setChioceOne(null);
    setChioceTwo(null);
  };
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
          ></SingleCard>
        ))}
      </div>
    </div>
  );
}

export default App;
