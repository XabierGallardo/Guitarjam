import React from 'react';
import './App.css';

//Import iframe component
import Iframe from 'react-iframe';

//https://www.youtube.com/embed/?listType=user_uploads&list=masanoriutsumi

function Youtube() {
	return(
		<div className="Youtube">
			<Iframe url="https://www.youtube.com/embed/?listType=user_uploads&list=masanoriutsumi"
			width="900px" height="496px" />
		</div>
	);
}

export default Youtube;
