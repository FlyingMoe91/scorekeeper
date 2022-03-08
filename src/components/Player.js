import './Player.css';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <section className="Player">
      <span className="Player__name">{name}</span>{' '}
      <button className="Player__score" onClick={onDecrement}>
        -
      </button>
      {score}
      <button className="Player__score" onClick={onIncrement}>
        +
      </button>
    </section>
  );
}
