import React from 'react';
import {
  AppBar,
  Slide,
  useScrollTrigger,
  Toolbar,
  Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import NewsMenu from '../NewsMenu/NewsMenuContainer';
import useStyles from './NewsBarStyles';
import NewsSearch from '../NewsSearch/NewsSearch';

const HideOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const NewsBar = ({ location }, props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.container}>
          <Container maxWidth="lg">
            <Toolbar>
              <NewsMenu />
              <NewsSearch />
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

NewsBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  changeTag: PropTypes.func.isRequired,
};

export default withRouter(NewsBar);
