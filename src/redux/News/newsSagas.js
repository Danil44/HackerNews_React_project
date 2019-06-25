import shortid from 'shortid';
import { format } from 'timeago.js';
import { put, takeLatest, all, call, delay } from 'redux-saga/effects';
import { fetchNewsSuccess, fetchNewsError } from './newsActions';
import { getNewsApi, getNewsWithQueryApi } from './newsApi';

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

function* fetchNews({ payload: { tag } }) {
  yield delay(500);
  try {
    const data = yield call(getNewsApi, tag);
    yield put(fetchNewsSuccess(mapGotData(data)));
  } catch (err) {
    yield put(fetchNewsError(err));
  }
}

function* fetchNewsWithQuery({ payload: { query } }) {
  yield delay(500);
  try {
    const data = yield call(getNewsWithQueryApi, query);
    yield put(fetchNewsSuccess(mapSearchedData(data)));
  } catch (err) {
    yield put(fetchNewsError(err));
  }
}

function* watchFetchNews() {
  yield takeLatest('FETCH_NEWS_START', fetchNews);
}

function* watchfetchNewsWithQuery() {
  yield takeLatest('FETCH_NEWS_WITH_QUERY_START', fetchNewsWithQuery);
}

export default function* rootSaga() {
  yield all([watchFetchNews(), watchfetchNewsWithQuery()]);
}
