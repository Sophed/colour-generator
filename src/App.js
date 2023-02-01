import copy from "copy-to-clipboard";  
import './App.css';
import { useState } from 'react'

function App() {

  document.title = "Colours!"

  var letters = "0123456789ABCDEF";
  
  var colourCode = '#111111';
  document.body.style.background = colourCode;
  var hint = true;

  function Colour() {
    console.log("Changed colour.")
    var colourCode = '#';
    for (var i = 0; i < 6; i++)
    colourCode = colourCode + letters[(Math.floor(Math.random() * 16))];
    document.getElementById("colourDisplay").innerHTML = colourCode;
    document.body.style.background = colourCode;
    if (hint) {
      hint = false;
      document.getElementById("hint").remove();
    }
  }

  function Copy() {
    var copyText = document.getElementById("colourDisplay").innerHTML
    copy(document.getElementById("colourDisplay").innerHTML);
    alert("Copied " + copyText);
  }

  return (
    <div>
      <header className="App-header">
        <button
          onClick={Copy}
          id="colourDisplay"
        >
          {colourCode}
        </button>
        <a className="App" onClick={() => Colour()}>Generate</a>
        <p id="hint">Hint: Click the code to copy it!</p>
      </header>
    </div>
  );
}

export default App;
