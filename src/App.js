import React from 'react';
import './App.css';
import Tuner from './Tuner';
import Metronome from './Metronome';
import Youtube from './Youtube';

function App() {
  return (
    <div className="App">
	  
	  <div className="Tools">
		  <Tuner />
		  <Metronome />
	  </div>

	  <div className="Video">
		  <Youtube />
	  </div>

    </div>
  );
}

export default App;
