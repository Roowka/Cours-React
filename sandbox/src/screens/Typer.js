import { useEffect, useState } from "react";

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit odio a nisi venenatis finibus.`;

function Typer(props) {
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState({
    seconds: 0,
    milliseconds: 0,
  });

  function onClick() {
    setStarted(true);
    setInterval(() => {
      timer.milliseconds++;
      if (timer.milliseconds === 1000) {
        timer.milliseconds = 0;
        timer.seconds++;
      }
      incrementTimer();
    }, 100);
  }

  function incrementTimer() {
    setTimer((currentTimer) => timer);
  }

  //useEffect(() => {}, [started]);

  return (
    <div className="m-5 d-flex">
      <div className="p-2 flex-grow-1 border">{LOREM_IPSUM}</div>
      <div className="p-2 flex-grow-1">
        {started ? (
          <div>
            <textarea></textarea>
            <p>
              {timer.seconds} : {timer.decisecond}
            </p>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={onClick}>
            Start !
          </button>
        )}
      </div>
    </div>
  );
}
export default Typer;
