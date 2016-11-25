// >> file where we house all the routing between paths and a given component we want to show
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
	// matches this component to this endpoint aka path
	<Route path="/" component={App} >
	  <IndexRoute component={PostsIndex} />
	</Route>
);