import React from 'react';
import './App.css';
import play from './img/play.png';
import pause from './img/pause.png';

function Metronome() {
	return (
		<div className="Metronome">
			<h1>Metronome</h1>
			<input type="number" name="number" />
			<img src={play} />
			<img src={pause} />
		</div>
	);
}

export default Metronome;

