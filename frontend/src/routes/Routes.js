import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../_layouts/auth';
import DefaultLayout from '../_layouts/default';

import PropTypes from 'prop-types';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
	const signed = false;

	if (!signed && isPrivate) {
		return <Redirect to="/" />;
	}

	if (signed && !isPrivate) {
		return <Redirect to="/dashboard" />;
	}

	const Layout = signed ? DefaultLayout : AuthLayout;
	return (
		<Route
			{...rest}
			render={(props) => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([ PropTypes.element, PropTypes.func ])
};

RouteWrapper.defaultProps = {
	isPrivate: false
};
