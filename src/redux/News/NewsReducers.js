import { combineReducers } from 'redux';
import { Type } from './NewsActions';

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

export default combineReducers({
  newsTag: tagReducer,
  items: itemsReducer,
});
