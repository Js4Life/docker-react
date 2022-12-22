import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    alert('side effect');
    //return () => alert('good bye')
  })

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default App;
