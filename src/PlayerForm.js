import "./PlayerForm.css";

export default function PlayerForm() {
  return (
    <form className="PlayerForm">
      <label htmlFor="player">Add player:</label>
      <input id="player" type="text" />
    </form>
  );
}
