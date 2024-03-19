import React, { useEffect, useState } from "react";
import "./App.css";

function App(props) {
  // const logo = 1
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      console.log("Covered useEffect");
    } else {
      console.log("Else part to be covered");
    }
  }, [count]);

  const handleClick = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  return (
    <div className="App">
      <h1>{props.fname}</h1>
      <header className="App-header">
        <h3
          className="App-logo"
          data-testid="img"
          alt="logo"
          onClick={handleClick}
        >
          LOGO
        </h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
