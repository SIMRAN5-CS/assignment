import React from 'react';

const WelcomeScreen = ({ onStart }) => (
    <div className="flex flex-col items-center justify-center h-screen ">
    <h1 className="text-3xl font-semibold mb-8">Welcome to Our Survey!</h1>
    <button 
      onClick={onStart} 
      className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-200"
    >
      Start Survey
    </button>
  </div>
);

export default WelcomeScreen;