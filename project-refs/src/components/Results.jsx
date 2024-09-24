import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Result = forwardRef(function Result(
  { remainingTime, targetTime, reset },
  ref
) {
  const dialog = useRef();

  const resultBasedOnTime = remainingTime <= 0;
  const formatRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={reset}>
      {resultBasedOnTime && <h2>You Lost</h2>}
      {!resultBasedOnTime && <h2>Your Score {score}</h2>}
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped timer with{" "}
        <strong>{formatRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Result;
