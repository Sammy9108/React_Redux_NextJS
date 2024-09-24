import { useRef, useState } from "react";

import Result from "./Results";

export default function TimerChallenge({ title, targeTime }) {
  const timer = useRef();
  const showResult = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targeTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targeTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    showResult.current.open();
  }

  function handleResetTime() {
    setTimeRemaining(targeTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemianing) => prevTimeRemianing - 10);
    }, 10);
  }

  function handleStop() {
    showResult.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <Result
        ref={showResult}
        targetTime={targeTime}
        remainingTime={timeRemaining}
        reset={handleResetTime}
      ></Result>
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targeTime} second{targeTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "time running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
