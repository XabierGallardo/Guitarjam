import React from 'react';
import './App.css';

//Import iframe component
import Iframe from 'react-iframe';

//https://www.youtube.com/embed/?listType=user_uploads&list=masanoriutsumi

function Youtube() {
	return(
		<div className="Youtube">
			<h1>YOUTUBE</h1>
			<Iframe url="https://www.youtube.com/embed/?listType=user_uploads&list=masanoriutsumi"
			width="100%" height="496px" frameBorder="0" />
		</div>
	);
}

export default Youtube;
