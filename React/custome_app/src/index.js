import React from 'react';
import ReactDOM from 'react-dom/client';

import Mydemo from './Mydemo';

const root = ReactDOM.createRoot(document.getElementById('raj'));

root.render(
	<>
		<h1 class="bg-primary text-white p-5 text-center">Hi i am from index.js</h1>
		<Mydemo/>
	</>
)