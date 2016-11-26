import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				//Blog post has been created, navigate user to the index
				//Navigate by calling this.context.router.push with the new path to navigate to
				this.context.router.push('/');
			});
	}

 render() {
 	//ES5 syntax below commented out, equivalent to following line in ES6 syntax
 	// const handleSubmit = this.props.handleSubmit;
 	const {handleSubmit} = this.props;
 	//ES5 syntax below commented out, equivalent to following line in ES6 syntax
 	// const title = this.props.fields.title;
 	const {fields: {title, categories, content}} = this.props;

 	return(
 		<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
 		  <h3> Create A New Post </h3>

 		  <div className={`form-group ${title.touched && title.invalid ? "has-danger" : ''}`}>
 		  	<label>Title</label>
 		  	<input type="text" className="form-control" {...title} />
 		  	<div className="form-control-label">
 		  	  {title.touched ? title.error : ''}
 		  	 </div>
 		  </div>

 		  <div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ''}`}>
 		  	<label> Categories </label>
 		  	<input type="text" className="form-control" {...categories} />
 		  	<div className="form-control-label">
 		  	  {categories.touched ? categories.error : ''}
 		  	 </div>
 		  </div>

 		  <div className={`form-group ${content.touched && content.invalid ? "has-danger" : ''}`}>
 		  	<label> Content </label>
 		  	<textarea className="form-control" {...content} />
 		  	 		  	<div className="form-control-label">
 		  	  {content.touched ? content.error : ''}
 		  	 </div>
 		  </div>

 		  <button type="submit" className="btn btn-primary"> Submit </button>
 		  <Link to="/" className="btn btn-danger"> Cancel </Link>
 		</form>
 	);
 }
}

function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = "Enter a username";
	}
	if (!values.categories) {
		errors.categories = "Enter at least one category"
	}
	if (!values.content) {
		errors.content= "Enter some content"
	}

	return errors;
}

//conenct: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st argument is form confid, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, {createPost})(PostsNew);