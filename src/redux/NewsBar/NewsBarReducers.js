import { combineReducers } from 'redux';
import { Type } from './NewsBarActions';

const tagReducer = (state = 'newstories', { type, payload }) => {
  switch (type) {
    case Type.CHANGE_TAG:
      return payload.tag;

    default:
      return state;
  }
};

export default combineReducers({
  newsTag: tagReducer,
});
