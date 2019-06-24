import React from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Slide,
  useScrollTrigger,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import NewsMenu from '../NewsMenu/NewsMenuContainer';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 90,
  },

  container: {
    backgroundColor: teal[900],
  },

  tabs: {
    justifySelf: 'center',
  },
});

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
          <Toolbar variant="dense">
            <NewsMenu />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

NewsBar.propTypes = {
  changeTag: PropTypes.func.isRequired,
};

export default withRouter(NewsBar);
