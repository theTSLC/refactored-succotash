import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// imports reducer and creates variable of it named formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;
