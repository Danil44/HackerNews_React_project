import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import NewsItem from '../NewsItem/NewsItem';
import Loader from '../Loader/Loader';

const getQueryParams = history => queryString.parse(history.location.search);

const getTagFromLocation = history =>
  history.location.pathname.replace(/^\/+/g, '');
class NewsList extends Component {
  state = {};

  static propTypes = {
    tag: PropTypes.string.isRequired,
    fetchNews: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    fetchNewsWithQuery: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { fetchNewsWithQuery, fetchNews, history } = this.props;
    const params = getQueryParams(history);
    const isQueryExists = Object.entries(params).length === 0;
    const tag = getTagFromLocation(history);

    if (isQueryExists) {
      fetchNews(tag);
    } else {
      fetchNewsWithQuery(params.query);
    }
  }

  componentDidUpdate(prevProps) {
    const { tag, fetchNews } = this.props;
    if (prevProps.tag !== tag) {
      fetchNews(tag);
    }
  }

  render() {
    const { items, isLoading } = this.props;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {items.map(item => (
            <Grid item xs={12} sm={6} key={item.id}>
              <NewsItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
export default withRouter(NewsList);
