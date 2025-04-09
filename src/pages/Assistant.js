import React from 'react';

const Assistant = () => {
  const speak = () => {
    const message = new SpeechSynthesisUtterance("Marek, to jest Twój dzień. Zdominuj go.");
    message.lang = 'pl-PL';
    speechSynthesis.speak(message);
  };

  return (
    <div className="container">
      <h1>Asystent AI</h1>
      <button onClick={speak}>Powiedz coś</button>
    </div>
  );
};

export default Assistant;
