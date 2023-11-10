import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.filter((word) => word !== '').length;
  };

  return (
    <div className="container">
      <div className="form-group">
        <textarea
          className="form-control"
          rows={5}
          placeholder="Enter your text..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <p className="mt-3">Word Count: {countWords()}</p>
    </div>
  );
};

export default WordCounter;