import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import PlayerForm from "./PlayerForm.js";

function App() {
  return (
    <div className="App">
      <Player name="John Doe" score={20} />
      <Player name="Jane Doe" score={30} />
      <Button text="Reset scores" />
      <Button text="New game" />
      <PlayerForm />
    </div>
  );
}

export default App;
