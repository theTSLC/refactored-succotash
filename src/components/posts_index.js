import React, { Component } from 'react';
import { connect } from 'react-redux';
// action creator we want to call inside componentWillMount
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	// lifecycle method that React automatically calls once component is about to be rendered to DOM for first time
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
		  <div> List of Blog Posts </div>
		 );
	}
}

export default connect(null, {fetchPosts})(PostsIndex);
