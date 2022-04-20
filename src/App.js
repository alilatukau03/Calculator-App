import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (err) {
      setResult("Input anda salah");
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick}>
            :
          </button>
          <button className="biasa" name="7" onClick={handleClick}>
            7
          </button>
          <button className="biasa" name="8" onClick={handleClick}>
            8
          </button>
          <button className="biasa" name="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight" name="*" onClick={handleClick}>
            x
          </button>
          <button className="biasa" name="4" onClick={handleClick}>
            4
          </button>
          <button className="biasa" name="5" onClick={handleClick}>
            5
          </button>
          <button className="biasa" name="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick}>
            -
          </button>
          <button className="biasa" name="1" onClick={handleClick}>
            1
          </button>
          <button className="biasa" name="2" onClick={handleClick}>
            2
          </button>
          <button className="biasa" name="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button className="biasa" name="0" onClick={handleClick}>
            0
          </button>
          <button className="biasa" name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
