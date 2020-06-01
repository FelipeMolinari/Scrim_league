import React from 'react';
import GlobalStyles from './styles/global';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
console.log(Routes);

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />

			<Routes />
		</BrowserRouter>
	);
}

export default App;
