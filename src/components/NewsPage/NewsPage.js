import React, { Component } from 'react';
import NewsBar from '../NewsBar/NewsBarContainer';
import NewsList from '../NewsList/NewsListContainer';

class NewsPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <NewsBar />
        <NewsList />
      </div>
    );
  }
}

export default NewsPage;
