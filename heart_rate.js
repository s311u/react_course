import './App.css';
import React from 'react';
import { useState } from 'react' ;
function App () {
  function Calculate(){
    let age = document.getElementById("age-input").value;
    let lower = (220 - age) * 0.65;
    let upper = (220 - age) * 0.85;
    document.getElementById("output").innerHTML = (lower + "-" + upper);
  }
  return (
    <div class = "App">
    <div class="container">  
      <h1>Heart rate limits calculator</h1>
      <label>
          <input id="age-input" type="number" placeholder="Age"/>
      </label>
      <button type = "button" onClick = { Calculate } > Calculate</button>
          <h4>Heart rate limits</h4>
          <div id="output"></div>
      </div>
  </div>
  )}
export default App;
