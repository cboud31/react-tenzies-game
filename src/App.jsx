import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDice;
  }

  const diceElements = dice.map((die) => <Die value={die} />);
  console.log(`Dice array: ${dice}`);

  return (
    <div className="App">
      <main>
        <div className="dice-container">{diceElements}</div>
      </main>
    </div>
  );
}

export default App;
