import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(prevSetCount => prevSetCount + 1)
  }

  function handleMinus () {
    setCount(prevSetCount => prevSetCount - 1)
  }

    function handleReset () {
    setCount(prevSetCount => 0)
  }

  return (
    <>
      <div className="result">
        <h2>{count}</h2>
      </div>
      <div className="btns">
        <div className="btn-add">
          <button onClick={handleAdd}>+</button>
        </div>
        <div className="btn-minus">
          <button onClick={handleMinus}>-</button>
        </div>
         <div className="btn-reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
