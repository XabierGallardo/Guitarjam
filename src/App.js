import React from 'react';
import './App.css';
import Header from './Header';
import Tuner from './Tuner';
import Metronome from './Metronome';
import Youtube from './Youtube';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

		<Header />
		<Tuner />
		<Metronome />
		<Youtube />
		<Footer />

    </div>
  );
}

export default App;
