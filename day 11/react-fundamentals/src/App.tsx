import { useState } from 'react';
import './App.css'
import Count from './components/Count'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} />
      <button onClick={() => {
        setCount(count + 1);
      }}>Add</button>
    </>
  )
}

export default App;
