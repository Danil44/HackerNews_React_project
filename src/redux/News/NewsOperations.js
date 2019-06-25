import axios from 'axios';
import shortid from 'shortid';
import { format } from 'timeago.js';
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
} from './NewsActions';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const mapGotData = data =>
  data.map(({ byline: by, published_date: published, ...item }) => ({
    ...item,
    id: shortid.generate(),
    published: format(published),
    by,
  }));

const mapSearchedData = data =>
  data.map(
    ({
      byline: { original },
      headline: { main },
      pub_date: published,
      web_url: url,
      _id: id,
      ...item
    }) => ({
      by: original,
      title: main,
      id,
      published: format(published),
      url,
      ...item,
    }),
  );

export const fetchNews = tag => dispatch => {
  dispatch(fetchNewsStart());

  axios
    .get(
      `https://api.nytimes.com/svc/topstories/v2/${tag}.json?api-key=${API_KEY}`,
    )
    .then(({ data: { results } }) =>
      dispatch(fetchNewsSuccess(mapGotData(results))),
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
      dispatch(fetchNewsSuccess(mapSearchedData(response.docs))),
    )
    .catch(err => dispatch(fetchNewsError(err)));
};
