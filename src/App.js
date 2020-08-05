import React from 'react';
import Stopwatch from "./Components/Stopwatch";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="watch"><h2 className="text">Time Na Money O!</h2></div><br></br>
        <div className="watch2"></div>
     <Stopwatch/>
    </div>
  );
}
export default App;

