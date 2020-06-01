import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Routes';
import SignIn from '../Pages/SignIn';
import SignOn from '../Pages/SignOn';
import Dashboard from '../Pages/Dashboard';
export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={SignIn} />
			<Route path="/register" exact component={SignOn} />
			<Route path="/dashboard" exact component={Dashboard} isPrivate />

			<Route path="/" component={() => <h1>401</h1>} />
		</Switch>
	);
}
