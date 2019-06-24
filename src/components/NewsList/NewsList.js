import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import NewsItem from '../NewsItem/NewsItem';

const getQueryParams = history => queryString.parse(history.location.search);
class NewsList extends Component {
  state = {};

  static propTypes = {
    tag: PropTypes.string.isRequired,
    fetchNews: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    fetchNewsWithQuery: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { fetchNewsWithQuery, history } = this.props;
    const params = getQueryParams(history);

    if (Object.entries(params).length === 0) return;

    fetchNewsWithQuery(params.query);
  }

  componentDidUpdate(prevProps) {
    const { tag, fetchNews } = this.props;
    if (prevProps.tag !== tag) {
      fetchNews(tag);
    }
  }

  render() {
    const { items } = this.props;
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
