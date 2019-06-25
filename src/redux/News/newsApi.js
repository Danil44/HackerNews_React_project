import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const getNewsApi = tag => {
  return axios
    .get(
      `https://api.nytimes.com/svc/topstories/v2/${tag}.json?api-key=${API_KEY}`,
    )
    .then(({ data: { results } }) => results);
};

export const getNewsWithQueryApi = query => {
  return axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`,
    )
    .then(({ data: { response } }) => response.docs);
};
