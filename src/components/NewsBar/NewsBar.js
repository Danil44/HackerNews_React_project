import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  margin: {
    margin: theme.spacing(2),
  },

  container: {
    backgroundColor: teal.A700,
  },
}));

const NewsBar = ({ tag, changeTag }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Tabs
          value={tag}
          onChange={(event, value) => changeTag(value)}
          centered
        >
          <Tab value="newstories" label="New Stories" />
          <Tab value="topstories" label="Top Stories" />
          <Tab value="jobstories" label="Job Stories" />
          <Tab value="showstories" label="Show Stories" />
          <Tab value="askstories" label="Ask Stories" />
        </Tabs>
      </AppBar>
    </div>
  );
};

NewsBar.propTypes = {
  tag: PropTypes.string.isRequired,
  changeTag: PropTypes.func.isRequired,
};

export default NewsBar;
