import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>My Website</h1>
      <p>You have clicked the button {count} times.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};



export default App;