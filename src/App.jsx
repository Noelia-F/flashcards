import { useState } from "react";
import './App.css';

const Form = ({onSubmit}) => {
  const initialFormData = {front: '', back: ''};
  const [ frontInput, setFrontInput ] = useState('');
  const [ backInput, setBackInput ] = useState('');
  const [ form, setForm ] = useState({front: '', back: ''});
  const [ formEmpty, setFormEmpty ] = useState(true);
  
  const handleReset = () => {
    setFrontInput('');
    setBackInput('');
    setForm(initialFormData);
    setFormEmpty(true);
  }

  const handleOnSubmit = (e) => {
    const formCopy = {...form, front: frontInput, back: backInput};
    e.preventDefault();
    setForm(formCopy);
    handleReset();
    onSubmit(formCopy);
  }

  const handleFrontInput = (data) => {
    setFrontInput(data);
    if (backInput !== '') {
      setFormEmpty(false);
    }
  }

  const handleBackInput = (data) => {
    setBackInput(data);
    if (frontInput !== '') {
      setFormEmpty(false);
    }
  }

  return (
    <form name="cardForm" id="cardForm" className="form" onSubmit={handleOnSubmit}>
      <label htmlFor="frontCardInput" className="label">front card word</label>
      <input className="input" placeholder="Enter front card word" type="text" name="frontCardInput" value={frontInput} onChange={(e) => handleFrontInput(e.target.value)} />
      <label htmlFor="backCardInput" className="label">back card word</label>
      <input className="input" placeholder="Enter back card word" type="text" name="backCardInput" value={backInput} onChange={(e) => handleBackInput(e.target.value)} />
      <div className="form__buttons">
        <button className="button button--primary" disabled={formEmpty} type="submit" id="save-word">Save</button>
        <button className="button button--secondary" disabled={formEmpty} type="reset" onClick={handleReset}>Reset</button>
      </div>
    </form>
  )
}

const CardList = ({cards}) => {
  if (cards.length > 0 ) {
    return (
      <ul className="card-list">
        {
          cards.map((card, index) => (
            <li key={index} className="card-list__element">
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

const Empty = () => {
  return (
    <div className="empty">
      <p className="text">Empty list</p>
    </div>
  );
}

const Card = ({card}) => {
  return (
    <div className="card card--list-item">
      <p className="text">{card.front}</p>
      <p className="text">{card.back}</p>
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1 className="title title--l">Flashcards</h1>
      <p className="text">Save flashcards to study vocabulary</p>
    </header>
  );
}

const App = () => {
  const [cards, setCards] = useState([]);
  const onSubmit = (formData) => {
    const cardsCopy = [...cards, formData];
    setCards(cardsCopy);
  }

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <section className="section section--form">
          <h2 className="title title--m">
            Add Flashcard
          </h2>
          <p className="text">Add a new flashcard to your vocab list</p>
          <Form onSubmit={onSubmit} />
        </section>
        <section className="section section--cards">
          <CardList cards={cards} />
        </section>
      </main>
    </div>
  )
}

export default App
