export const Type = {
  CHANGE_TAG: 'CHANGE_TAG',
  FETCH_NEWS_START: 'FETCH_NEWS_START',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR: 'FETCH_NEWS_ERROR',
};

export const changeTag = tag => ({
  type: Type.CHANGE_TAG,
  payload: { tag },
});

export const fetchNewsStart = () => ({
  type: Type.FETCH_NEWS_START,
});

export const fetchNewsSuccess = news => ({
  type: Type.FETCH_NEWS_SUCCESS,
  payload: { news },
});

export const fetchNewsError = error => ({
  type: Type.FETCH_NEWS_ERROR,
  payload: { error },
});
