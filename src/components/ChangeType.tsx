  import React, { useState } from 'react';

  const ChangeType: React.FC = () => {
    const [type, setType] = useState<string>('Type A');

    const toggleType = () => {
      setType((prevType) => (prevType === 'Type A' ? 'Type B' : 'Type A'));
    };

    return (
      <div>
        <p>Current Type: {type}</p>
        <button onClick={toggleType}>Change Type</button>
      </div>
    );
  };

  export default ChangeType;
