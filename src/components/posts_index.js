import React, { Component } from 'react';
import { connect } from 'react-redux';
// action creator we want to call inside componentWillMount
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	// lifecycle method that React automatically calls once component is about to be rendered to DOM for first time
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
				);
		});
	}

	render() {
		return (
		  <div> 
		  	<div className="text-xs-right">
		  		<Link to="/posts/new" className="btn btn-primary">
		  			Add a post
		  		</Link>
		  	</div>
		  	<h3> Posts </h3>
		  	<ul className="list-group">
		  		{this.renderPosts()}
		  	</ul>
		  </div>
		 );
	}
}

function mapStateToProps(state) {
	return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
