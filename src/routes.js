// >> file where we house all the routing between paths and a given component we want to show
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () => {
	return <div> Hey there! </div>;
};

export default (
	// matches this component to this endpoint aka path
	<Route path="/" component={App} >
	  <Route path="greet" component={Greeting} />
	  <Route path="greet2" component={Greeting} />
	  <Route path="greet3" component={Greeting} />
	</Route>
);