import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Footer from "./Footer";

function App() {

  const styleBtn = {
    margin: '0.5rem'
  }

  let [counter, setCounter] = useState(0);

  function decreaseCount() {
    setCounter(--counter);
    if (counter < 0) {
      document.getElementById("counter").style = "color: red";
    }
  }

  function resetCount() {
    setCounter(0);
    if (counter === 0) {
      document.getElementById("counter").style = "color: white";
    }
  }

  function increaseCount() {
    setCounter(++counter);
    if (counter > 0) {
      document.getElementById("counter").style = "color: orange";
    }
  }
  return (
    <div align="center">
      <h1>Counter App</h1>
      <h1 id="counter">{counter}</h1>
      <Button style={styleBtn} onClick={decreaseCount} variant="contained" color="secondary">
        Decrease
      </Button>
      <Button style={styleBtn} onClick={resetCount} variant="contained">
        Reset
      </Button>
      <Button style={styleBtn} onClick={increaseCount} variant="contained" color="primary">
        Increase
      </Button>
      <Footer />
    </div>
  );
}

export default App;
