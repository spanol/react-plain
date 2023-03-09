import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const intervalRef = useRef(null);
  const Showtimer = () => {
    return (
      <div>
        <h1>{formatTime(time)}</h1>
      </div>
    );
  };

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const startTimer = () => {
    setTimerOn(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    setTimerOn(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTimerOn(false);
    setTime(0);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="App">
      <Showtimer />
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
