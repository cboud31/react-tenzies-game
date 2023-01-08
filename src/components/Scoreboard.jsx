function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div>Your score is {props.rollCount}</div>
      <div>Your best score is 000</div>
    </div>
  );
}

export default Scoreboard;
