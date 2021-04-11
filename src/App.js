import "./App.css";
import React, { useState, useEffect } from "react";
import { MemberTable } from "./listDemo";
import { UseEffectToFetch } from "./fetchJokes";

// 1.

// a b
function Counter(props) {
  const [count, setCount] = useState(props.number);

  useEffect(() => {
    return () => {
      localStorage.setItem("count", count);
    };
  });

  return (
    <div className="App">
      <button onClick={() => setCount(count + 5)}>Click & count more</button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>Click & count less</button>
      <p>{count}</p>
    </div>
  );
}

function App() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 },
  ];
  return (
    <div className="App">
      <Counter number={2} />
      <MemberTable members={initialMembers} />
      <UseEffectToFetch />
    </div>
  );
}

export default App;
