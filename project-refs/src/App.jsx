import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targeTime={1}></TimerChallenge>
        <TimerChallenge title="not easy" targeTime={3}></TimerChallenge>
        <TimerChallenge title="better" targeTime={5}></TimerChallenge>
        <TimerChallenge title="Getting tough" targeTime={10}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
