import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Container, Box } from '@material-ui/core';
import NewsItem from '../NewsItem/NewsItem';

class NewsList extends Component {
  state = {};

  componentDidMount() {
    const { fetchNews } = this.props;
    const { location } = this.props;
    const currentPathname = location.pathname.replace(/^\/+/g, '');
    const tag = currentPathname || 'home';

    fetchNews(tag);
  }

  componentDidUpdate(prevProps, prevState) {
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
