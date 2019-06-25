import { combineReducers } from 'redux';
import { Type } from './newsActions';

const tagReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.CHANGE_TAG:
      return payload.tag;

    default:
      return state;
  }
};

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_NEWS_SUCCESS:
      return payload.news;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case Type.FETCH_NEWS_START:
    case Type.FETCH_NEWS_WITH_QUERY_START:
      return true;

    case Type.FETCH_NEWS_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  newsTag: tagReducer,
  items: itemsReducer,
  isLoading: loadingReducer,
});
