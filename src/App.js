import React from 'react';
import './App.css';
import Guitar from './Guitar';
import Bass from './Bass';
import Metronome from './Metronome';
import Youtube from './Youtube';

function App() {
  return (
    <div className="App">
	  
	  <div className="Tuning">
		  <Guitar />
		  <Bass />
	  </div>

	  <div className="Music">
		  <Metronome />
		  <Youtube />
	  </div>

    </div>
  );
}

export default App;
