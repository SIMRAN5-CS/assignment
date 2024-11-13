import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Confirmation from './components/Confirmation';
import Thanks from './components/Thanks';
import { v4 as uuidv4 } from 'uuid';
import questions from "./components/data";

const App = () => {
  const [sessionId, setSessionId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);

  const startSurvey = () => {
    setSessionId(uuidv4());

  };
  console.log(sessionId)

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = { questionId: questions[currentQuestionIndex].id, answer };
    setAnswers(updatedAnswers);
    localStorage.setItem(sessionId, JSON.stringify(updatedAnswers));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsConfirming(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSkip = () => handleNext();

  const submitSurvey = () => {
    const completedData = { answers, status: 'COMPLETED' };
    localStorage.setItem(sessionId, JSON.stringify(completedData));
    setIsConfirming(false);
    setIsThankYou(true);
  };

  const resetSurvey = () => {
    setSessionId(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsThankYou(false);
  };
  return(
    <div className="w-full min-h-screen flex items-center justify-center ">
    {!sessionId ? (
      <Welcome onStart={startSurvey} />
    ) : isThankYou ? (
      <Thanks onReset={resetSurvey} />
    ) : isConfirming ? (
      <Confirmation onConfirm={submitSurvey} onCancel={() => setIsConfirming(false)} />
    ) : (
      <Question
        question={questions[currentQuestionIndex]}
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSkip={handleSkip}
        onAnswer={handleAnswer}
      />
    )}
  </div>
  )  
}


export default App;
