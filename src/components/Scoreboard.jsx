function Scoreboard(props) {
  const bestScore = Math.min(...props.scoreboard);
  return (
    <div className="scoreboard">
      <div>Your score is {props.rollCount}</div>
      <div>Your best score is {bestScore}</div>
    </div>
  );
}

export default Scoreboard;
