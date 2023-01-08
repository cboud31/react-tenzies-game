import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import Die from "./components/Die";
import Scoreboard from "./components/Scoreboard";

/*
-- Extra Credit:
1. [x] Create a 'rollCount' piece of state that tracks how many rolls it takes to win the game.
    [x] Create 'Scoreboard' component to display the rollCount when the game is over.

2. Create a 'highScores' array to track user's best game while playing.
    # Create a highScores piece of state.
    # Set it in localStorage
*/

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [highScores, setHighScores] = useState([]);
  const [rollCount, setRollCount] = useState(0);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => die.value === dice[0].value);
    console.log(rollCount);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You win!");
      console.log(rollCount);
    }
  }, [dice]);

  function genNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      id: nanoid(),
      isHeld: false,
    };
  }

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(genNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : genNewDie();
        })
      );
      setRollCount((oldRollCount) => oldRollCount + 1);
    } else {
      setTenzies(false);
      setRollCount(0);
      setDice(() => allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div className="App">
      <main>
        {tenzies && <Confetti />}
        {tenzies && <Scoreboard rollCount={rollCount} />}
        <h1 className="title">Tenzies!!</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll Dice"}
        </button>
      </main>
    </div>
  );
}

export default App;
