import { useState } from "react"

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
    <form name="cardForm" id="cardForm" onSubmit={handleOnSubmit}>
      <label htmlFor="frontCardInput">front card word</label>
      <input placeholder="Enter front card word" type="text" name="frontCardInput" value={frontInput} onChange={(e) => handleFrontInput(e.target.value)} />
      <label htmlFor="backCardInput">back card word</label>
      <input placeholder="Enter back card word" type="text" name="backCardInput" value={backInput} onChange={(e) => handleBackInput(e.target.value)} />
      <div>
        <button disabled={formEmpty} type="submit" id="save-word">Save</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </div>
    </form>
  )
}

const App = () => {
  const [cards, setCards] = useState([]);
  const onSubmit = (formData) => {
    const cardsCopy = [...cards, formData];
    setCards(cardsCopy);
  }

  return (
    <>
      <header>
        <h1>Flashcards</h1>
        <p>Save flashcards to study vocabulary</p>
      </header>
      <main>
        <section>
          <h2>
            Add Flashcard
          </h2>
          <p>Add a new flashcard to your vocab list</p>
        </section>
      </main>
      <Form onSubmit={onSubmit} />
      <ul>
        {
          cards.map((card, index) => (
            <li key={index}>
              <p>{card.front}</p>
              <p>{card.back}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
