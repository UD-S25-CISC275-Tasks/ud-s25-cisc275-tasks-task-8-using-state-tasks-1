  import React, { useState } from 'react';

  const RevealAnswer: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide Answer' : 'Reveal Answer'}
        </button>
        {isVisible && <p>The answer is 42.</p>}
      </div>
    );
  };

  export default RevealAnswer;
