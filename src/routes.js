import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

export default (
	// matches this component to this endpoint aka path
	<Route path="/" component={App} />
);