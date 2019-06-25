import React, { Component, Fragment } from 'react';
import NewsBar from '../NewsBar/NewsBarContainer';
import NewsList from '../NewsList/NewsListContainer';

class NewsPage extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <NewsBar />
        <NewsList />
      </Fragment>
    );
  }
}

export default NewsPage;
