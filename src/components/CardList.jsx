import Card from './Card';
import Empty from './Empty';

const CardList = ({cards}) => {
  if (cards.length > 0 ) {
    return (
      <ul className="card-list">
        {
          cards.map((card) => (
            <li key={card.id}>
              <Card card={card} />
            </li>
          ))
        }
      </ul>
    );
  } else {
    <Empty />
  }
}

export default CardList;