import React, { useState } from 'react';
import './VocabularyManagement.css'; // Import your CSS file

const VocabularyManagement = () => {
  const [formData, setFormData] = useState({
    kanji: '',
    hiragana: '',
    romaji: '',
    meaning: '',
    topic: '',
    example: '',
    exampleRomaji: '',
    exampleMeaning: ''
  });

  const [errorField, setErrorField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorField(null);
  };

  const handleCancel = () => {
    // Handle cancel form and navigate back to the homepage
  };

  const handleDone = () => {
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

    if (!isFormValid) {
      // If any field is empty, set an error for the first empty field
      const firstErrorField = Object.keys(formData).find((key) => formData[key].trim() === '');
      setErrorField(firstErrorField);
    } else {
      // If all fields are filled, add the information to the database and navigate back to the homepage
      // Handle adding information to the database
      // Then navigate back to the homepage
    }
  };

  return (
    <div>
      <h1>Add Word</h1>
      <form>
        <label>Kanji:</label>
        <input
          type="text"
          name="kanji"
          value={formData.kanji}
          onChange={handleInputChange}
          className={errorField === 'kanji' ? 'error' : ''}
        />

        <label>Hiragana:</label>
        <input
          type="text"
          name="hiragana"
          value={formData.hiragana}
          onChange={handleInputChange}
          className={errorField === 'hiragana' ? 'error' : ''}
        />
        <label>Romaji:</label>
        <input
          type="text"
          name="romaji"
          value={formData.romaji}
          onChange={handleInputChange}
          className={errorField === 'romaji' ? 'error' : ''}
        />
         <label>Meaning:</label>
        <input
          type="text"
          name="meaning"
          value={formData.meaning}
          onChange={handleInputChange}
          className={errorField === 'meaning' ? 'error' : ''}
        />

        <label>Topic:</label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleInputChange}
          className={errorField === 'topic' ? 'error' : ''}
        />

        <label>Example:</label>
        <input
          type="text"
          name="example"
          value={formData.example}
          onChange={handleInputChange}
          className={errorField === 'example' ? 'error' : ''}
        />

        <label>exampleRomaji:</label>
        <input
          type="text"
          name="exampleRomaji"
          value={formData.exampleRomaji}
          onChange={handleInputChange}
          className={errorField === 'exampleRomaji' ? 'error' : ''}
        />

        <label>exampleMeaning:</label>
        <input
          type="text"
          name="exampleMeaning"
          value={formData.exampleMeaning}
          onChange={handleInputChange}
          className={errorField === 'exampleMeaning' ? 'error' : ''}
        />
       

        <div>
          <button type="button" className="cancelButton" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="doneButton" onClick={handleDone}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default VocabularyManagement;

