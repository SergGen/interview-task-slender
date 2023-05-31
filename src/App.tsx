import './App.css';
import { ChangeEvent, useState } from 'react';
import { isNumbersAndSpace, findSimpleNumbers } from './utils';

function App() {
  const [draftText, setDraftText] = useState<string>('');
  const [valuesSimple, setValuesSimple] = useState<string>('');
  const handleDraftText = (evt: ChangeEvent<HTMLInputElement>) => {
    const enteredText = evt.target.value;
    if (isNumbersAndSpace(enteredText)) {
      setDraftText(enteredText);
      setValuesSimple(findSimpleNumbers(enteredText));
    }
  };

  return (
    <div>
      <label>
        <span>Enter numbers: </span>
        <input value={draftText} onChange={handleDraftText} type="text" />
      </label>
      <p>All entered: {draftText}</p>
      <p>Only simple numbers: {valuesSimple}</p>
    </div>
  );
}

export default App;
