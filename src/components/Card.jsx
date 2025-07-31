const Card = ({card}) => {
  return (
    <div className="card card--list-item">
      <p className="text">{card.front}</p>
      <p className="text">{card.back}</p>
    </div>
  );
}

export default Card;