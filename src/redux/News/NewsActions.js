export const Type = {
  CHANGE_TAG: 'CHANGE_TAG',
  CHANGE_QUERY: 'CHANGE_QUERY',
  FETCH_NEWS_START: 'FETCH_NEWS_START',
  FETCH_NEWS_WITH_QUERY_START: 'FETCH_NEWS_WITH_QUERY_START',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR: 'FETCH_NEWS_ERROR',
};

export const changeTag = tag => ({
  type: Type.CHANGE_TAG,
  payload: { tag },
});

export const fetchNewsStart = tag => ({
  type: Type.FETCH_NEWS_START,
  payload: { tag },
});

export const fetchNewsWithQueryStart = query => ({
  type: Type.FETCH_NEWS_WITH_QUERY_START,
  payload: { query },
});

export const fetchNewsSuccess = news => ({
  type: Type.FETCH_NEWS_SUCCESS,
  payload: { news },
});

export const fetchNewsError = error => ({
  type: Type.FETCH_NEWS_ERROR,
  payload: { error },
});
