import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: '50%',
  },

  circle: {
    color: teal[900],
  },
});

const CircularIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress
        className={classes.circle}
        disableShrink
        color="inherit"
        size={50}
      />
    </div>
  );
};

export default CircularIndeterminate;
