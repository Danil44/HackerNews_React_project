import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createDebounce from 'redux-debounced';
import NewsReducers from './News/NewsReducers';
import throttledMiddleware from './middleware/throttled';

const rootReducer = combineReducers({
  news: NewsReducers,
});

const middleware = applyMiddleware(
  throttledMiddleware,
  createDebounce(),
  ReduxThunk,
  logger,
);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
