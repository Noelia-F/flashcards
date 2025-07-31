import { useState } from "react";

const Form = ({onSubmit}) => {
  const initialFormData = {front: '', back: ''};
  const [ frontInput, setFrontInput ] = useState('');
  const [ backInput, setBackInput ] = useState('');
  const [ form, setForm ] = useState({front: '', back: ''});
  const [ formEmpty, setFormEmpty ] = useState(true);

  const uniqueId = () =>  Math.floor(Math.random() * Date.now()).toString(16);
  
  const handleReset = () => {
    setFrontInput('');
    setBackInput('');
    setForm(initialFormData);
    setFormEmpty(true);
  }

  const handleOnSubmit = (e) => {
    const formCopy = {...form, front: frontInput, back: backInput, id: uniqueId };
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

export default Form;