  import React, { useState } from 'react';

  const StartAttempt: React.FC = () => {
    const [attempts, setAttempts] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    const startAttempt = () => {
      if (!isActive) {
        setIsActive(true);
        setAttempts((prev) => prev + 1);
      }
    };

    const stopAttempt = () => {
      if (isActive) {
        setIsActive(false);
      }
    };

    return (
      <div>
        <p>Attempts: {attempts}</p>
        <button onClick={startAttempt} disabled={isActive}>
          Start Attempt
        </button>
        <button onClick={stopAttempt} disabled={!isActive}>
          Stop Attempt
        </button>
      </div>
    );
  };

  export default StartAttempt;
