import axios from 'axios';
import shortid from 'shortid';
import { format } from 'timeago.js';
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
} from './NewsActions';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const mapper = data =>
  data.map(({ published_date: published, ...item }) => ({
    ...item,
    id: shortid.generate(),
    published: format(published),
  }));

const searchMapper = data =>
  data.map(({ headline: { main }, _id: id, ...item }) => ({
    title: main,
    id,
    ...item,
  }));

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

export const fetchNewsWithQuery = query => dispatch => {
  dispatch(fetchNewsStart());

  axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`,
    )
    .then(({ data: { response } }) =>
      dispatch(fetchNewsSuccess(searchMapper(response.docs))),
    )
    .catch(err => dispatch(fetchNewsError(err)));
};
