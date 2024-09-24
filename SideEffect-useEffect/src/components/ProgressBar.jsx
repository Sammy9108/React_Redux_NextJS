import { useEffect, useState } from "react";

export default function ProgressBar({ TIMER }) {
  const [timerTime, setTimerTime] = useState(TIMER);

  useEffect(() => {
    const runningTimer = setInterval(() => {
      setTimerTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(runningTimer);
    };
  }, []);

  return (
    <progress value={timerTime} max={TIMER}>
      {" "}
    </progress>
  );
}
