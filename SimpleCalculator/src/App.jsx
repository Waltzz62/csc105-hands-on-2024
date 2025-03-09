import React from "react";
import ReactDOM from 'react-dom/client';
import { useCalculator } from "./component/function";
import "./App.css";

function Calculator() {
  const { result, input, setInput, setResult, handleOperation } = useCalculator();

  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Simple Calculator</h2>
      <div className="text-lg font-semibold mb-4">Result: {result}</div>
      <input
        type="text"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mb-4 text-center"
      />
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button onClick={() => handleOperation("add")} className="button">Add</button>
        <button onClick={() => handleOperation("subtract")} className="button">Subtract</button>
        <button onClick={() => handleOperation("multiply")} className="button">Multiply</button>
        <button onClick={() => handleOperation("divide")} className="button">Divide</button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => setInput("")} className="button">Reset Input</button>
        <button onClick={() => setResult(0)} className="button reset-button">Reset Result</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

export default Calculator;
