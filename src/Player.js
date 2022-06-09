import "./Player.css";

export default function Player({ name, score }) {
  return (
    <div className="Player">
      <h2>{name}</h2>
      <button className="Player__button">-</button>
      <h2>{score}</h2>
      <button className="Player__button">+</button>
    </div>
  );
}
