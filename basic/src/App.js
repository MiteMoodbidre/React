import { useState } from 'react';
function App() {
  const [counter, setcounter] = useState(0)

  
  const add = () => {
        setcounter(counter+1)
   };
   
  const sub=()=>{
        setcounter(counter-1)
   };

  return (
    <div>
         <h1>Counter Application</h1>
          <h2>Counter value:{counter}</h2>
          <button onClick={add}>Add</button>
          <button onClick={sub}>Subtract</button>
    </div>
   
  );
}

export default App;
