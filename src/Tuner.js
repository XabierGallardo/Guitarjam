import React from 'react';
import './App.css';

function Guitar() {

    const test = () => {
        console.log("click");
    }

    return (
        <div className="Tuner">
			<h1 onClick={test}>GUITAR</h1>
            <h1 onClick={test}>BASS</h1>
		</div>
    );
}

export default Guitar;