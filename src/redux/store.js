import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import tagReducer from './NewsBar/NewsBarReducers';

const rootReducer = combineReducers({
  newsNavigation: tagReducer,
});

const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
