import React, {useState} from 'react';

function Wasabi() {
  const [count, setCount] = useState(300);
  return (
    <div>
      <h1>How much more can you eat? You're at {count} servings!</h1>
      <button onClick={() => setCount(count + 1)}> Eat 1 Serving </button>
      <button onClick={() => setCount(count + 3)}> Eat 3 servings </button>
    </div>
  );
}

export default Wasabi;