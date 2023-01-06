import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./components/Die";

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 *
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        id: nanoid(),
        isHeld: false,
      });
    }
    return newDice;
  }

  function handleClick() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die value={die.value} key={die.id} isHeld={die.isHeld} />
  ));

  return (
    <div className="App">
      <main>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice" onClick={handleClick}>
          <span>Roll Dice</span>
        </button>
      </main>
    </div>
  );
}

export default App;
