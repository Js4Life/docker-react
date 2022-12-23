import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      i was changed to the {count}
    </button>
  );
}

export default App;
