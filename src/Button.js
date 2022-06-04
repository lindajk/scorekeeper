import "./Button.css";

export default function Button({ text }) {
  //destructuring assignemnt
  //komponente die wir anzeigen wollen
  return (
    <div className="Button">
      <button className="Button__text">{text}</button>
    </div>
  );
}
