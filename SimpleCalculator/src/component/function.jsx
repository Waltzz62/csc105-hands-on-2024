import { useState } from "react";

export function useCalculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleOperation = (operation) => {
    const num = parseFloat(input);
    if (isNaN(num)) return;

    switch (operation) {
      case "add":
        setResult(result + num);
        break;
      case "subtract":
        setResult(result - num);
        break;
      case "multiply":
        setResult(result * num);
        break;
      case "divide":
        if (num !== 0) setResult(result / num);
        break;
      default:
        break;
    }
    setInput("");
  };

  return { result, input, setInput, setResult, handleOperation };
}