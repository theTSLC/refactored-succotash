import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
 render() {
 	//ES5 syntax below commented out, equivalent to following line in ES6 syntax
 	// const handleSubmit = this.props.handleSubmit;
 	const {handleSubmit} = this.props;
 	//ES5 syntax below commented out, equivalent to following line in ES6 syntax
 	// const title = this.props.fields.title;
 	const {fields: {title, categories, content}} = this.props;

 	return(
 		<form onSubmit={handleSubmit(this.props.createPost)}>
 		  <h3> Create A New Post </h3>
 		  <div className="form-group">
 		  	<label>Title</label>
 		  	<input type="text" className="form-control" {...title} />
 		  	<div className="text-help">
 		  	  {title.touched ? title.error : ''}
 		  	 </div>
 		  </div>

 		  <div className="form-group">
 		  	<label> Categories </label>
 		  	<input type="text" className="form-control" {...categories} />
 		  	<div className="text-help">
 		  	  {categories.touched ? categories.error : ''}
 		  	 </div>
 		  </div>

 		  <div className="form-group">
 		  	<label> Content </label>
 		  	<textarea className="form-control" {...content} />
 		  	 		  	<div className="text-help">
 		  	  {content.touched ? content.error : ''}
 		  	 </div>
 		  </div>

 		  <button type="submit" className="btn btn-primary"> Submit </button>

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