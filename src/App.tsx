import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function changeCount() {
      // @ts-ignore
      await { then: (r) => setTimeout(r, 3000) };
      setCount(2);
    }
    setCount(1);
    changeCount();
  }, []);
  return <div>{count}</div>;
}

export default App;
