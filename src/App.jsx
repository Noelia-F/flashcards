import { useState } from "react";
import Form from './components/Form';
import CardList from './components/CardList';
import Header from './components/Header';
import './App.css';

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
