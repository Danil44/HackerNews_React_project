import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  container: {
    backgroundColor: teal[900],
  },

  tabs: {
    justifySelf: 'center',
  },
}));

const NewsBar = ({ changeTag, location }) => {
  const classes = useStyles();

  const tag = location.pathname.replace(/^\/+/g, '') || 'home';

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Tabs
          className={classes.tabs}
          indicatorColor="primary"
          value={tag}
          onChange={(event, value) => changeTag(value)}
          variant="scrollable"
          scrollButtons="off"
        >
          <Tab component={Link} to="/" value="home" label="home" />
          <Tab component={Link} to="/world" value="world" label="world" />
          <Tab
            component={Link}
            to="/technology"
            value="technology"
            label="technology"
          />
          <Tab component={Link} to="/health" value="health" label="health" />
          <Tab component={Link} to="/sports" value="sports" label="sports" />
          <Tab component={Link} to="/travel" value="travel" label="travel" />
          <Tab component={Link} to="/science" value="science" label="science" />
          <Tab component={Link} to="/food" value="food" label="food" />
        </Tabs>
      </AppBar>
    </div>
  );
};

NewsBar.propTypes = {
  changeTag: PropTypes.func.isRequired,
};

export default withRouter(NewsBar);
