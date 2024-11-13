import React, { useState, useEffect } from 'react';

const QuestionScreen = ({ question, currentIndex, totalQuestions, onNext, onPrevious, onSkip, onAnswer }) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setAnswer('');  // Reset answer on each new question
  }, [question]);

  const handleAnswer = () => {
    onAnswer(answer);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-2 ">
    <h2 className="text-xl mb-2">Question {currentIndex + 1}/{totalQuestions}</h2>
    <p className="text-lg mb-4 text-center">{question.text}</p>
    
    {question.type === 'rating' ? (
      <input 
        type="number" 
        min={question.min} 
        max={question.max} 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        className="border p-2 rounded w-24 mb-4 text-center"
      />
    ) : (
      <textarea 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        className="border p-2 rounded w-full max-w-md h-24 mb-4"
        placeholder="Type your answer here..."
      />
    )}

    <div className="flex gap-3">
      <button 
        onClick={onPrevious} 
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200" 
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <button 
        onClick={handleAnswer} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Next
      </button>
      <button 
        onClick={onSkip} 
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200"
      >
        Skip
      </button>
    </div>
  </div>
  );
};

export default QuestionScreen;
