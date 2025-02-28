  import React, { useState } from 'react';

  const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  };

  export default Counter;
