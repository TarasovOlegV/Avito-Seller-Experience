import { combineReducers } from 'redux';

import requestNewsReducer from './news_list';
import requestArticleReducer from './article';
import requestCommentsReducer from './comment_list';

const rootReducer = combineReducers({
  requestNewsReducer,
  requestArticleReducer,
  requestCommentsReducer,
});

export default rootReducer;
