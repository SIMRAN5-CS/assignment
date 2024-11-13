import React, { useEffect } from 'react';

const ThankYouScreen = ({ onReset }) => {
  useEffect(() => {
    const timer = setTimeout(onReset, 5000);
    return () => clearTimeout(timer);
  }, [onReset]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-semibold mb-4">Thank you for completing the survey!</h1>
    <p className="text-gray-600">Redirecting back to the welcome screen...</p>
  </div>
  );
};

export default ThankYouScreen;
