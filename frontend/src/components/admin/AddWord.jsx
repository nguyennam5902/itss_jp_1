import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddWord = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    hiragana: '',
    katakana: '',
    kanji: '',
    romaji: '',
    type: '',
    meaning: '',
    example: '',
    example_romaji: '',
    example_meaning: '',
    synonym_id: [],
    antonym_id: []
  });

  const [errorField, setErrorField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrorField(null);
  };

  const handleCancel = () => {
    history.push('/');
  };

  const handleDone = async () => {
    const isFormValid = Object.values(formValues).every((value) => value.trim() !== '');

    if (!isFormValid) {
      const firstErrorField = Object.keys(formValues).find((key) => formValues[key].trim() === '');
      setErrorField(firstErrorField);
    } else {
      const response = await fetch('/api/admin/word/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        history.push('/');
      } else {
        console.error('Failed to add word to the database');
      }
    }
  };

  return (
    <div>
      <h1>Add Word</h1>
      <form>
        <label>Hiragana:</label>
        <input
          type="text"
          name="hiragana"
          value={formValues.hiragana}
          onChange={handleInputChange}
          className={errorField === 'hiragana' ? 'error' : ''}
        />

        <label>Katakana:</label>
        <input
          type="text"
          name="katakana"
          value={formValues.katakana}
          onChange={handleInputChange}
          className={errorField === 'katakana' ? 'error' : ''}
        />
        <label>Kanji:</label>
        <input
          type="text"
          name="kanji"
          value={formValues.kanji}
          onChange={handleInputChange}
          className={errorField === 'kanji' ? 'error' : ''}
        />

        <label>Romaji:</label>
        <input
          type="text"
          name="romaji"
          value={formValues.romaji}
          onChange={handleInputChange}
          className={errorField === 'romaji' ? 'error' : ''}
        />

        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formValues.type}
          onChange={handleInputChange}
          className={errorField === 'type' ? 'error' : ''}
        />

        <label>Meaning:</label>
        <input
          type="text"
          name="meaning"
          value={formValues.meaning}
          onChange={handleInputChange}
          className={errorField === 'meaning' ? 'error' : ''}
        />

        <label>Example:</label>
        <input
          type="text"
          name="example"
          value={formValues.example}
          onChange={handleInputChange}
          className={errorField === 'example' ? 'error' : ''}
        />

        <label>example_romaji:</label>
        <input
          type="text"
          name="example_romaji"
          value={formValues.example_romaji}
          onChange={handleInputChange}
          className={errorField === 'example_romaji' ? 'error' : ''}
        />


        <label>example_meaning:</label>
        <input
          type="text"
          name="example_meaning"
          value={formValues.example_meaning}
          onChange={handleInputChange}
          className={errorField === 'example_meaning' ? 'error' : ''}
        />

         <label>synonym_id:</label>
        <input
          type="text"
          name="synonym_id"
          value={formValues.synonym_id}
          onChange={handleInputChange}
          className={errorField === 'synonym_id' ? 'error' : ''}
        />

        <label>antonym_id:</label>
        <input
          type="text"
          name="antonym_id"
          value={formValues.antonym_id}
          onChange={handleInputChange}
          className={errorField === 'antonym_id' ? 'error' : ''}
        />

        

        
        <div>
          <button type="button" className="cancelButton" onClick={handleCancel}>
            Hủy bỏ
          </button>
          <button type="button" className="doneButton" onClick={handleDone}>
            Thành công
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWord;
