import axios from 'axios';
import shortid from 'shortid';
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
} from './NewsActions';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const mapper = data => data.map(item => ({ ...item, id: shortid.generate() }));

export const fetchNews = tag => dispatch => {
  dispatch(fetchNewsStart());

  axios
    .get(
      `https://api.nytimes.com/svc/topstories/v2/${tag}.json?api-key=${API_KEY}`,
    )
    .then(({ data: { results } }) =>
      dispatch(fetchNewsSuccess(mapper(results))),
    )
    .catch(err => dispatch(fetchNewsError(err)));
};
