import React, { useState, useEffect } from 'react';
import {
  MenuList,
  MenuItem,
  Button,
  SwipeableDrawer,
  IconButton,
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
});

function NewsMenu({ changeTag, location }) {
  const classes = useStyles();

  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;

    setState({ isOpen: open });
  };

  const { pathname } = location;

  const tag = pathname.replace(/^\/+/g, '') || 'home';

  useEffect(() => {
    changeTag(tag);
  });

  const sideList = () => (
    <div
      role="presentation"
      className={classes.list}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MenuList>
        <MenuItem component={Link} to="/" selected={pathname === '/'}>
          Home
        </MenuItem>
        <MenuItem component={Link} to="/world" selected={pathname === '/world'}>
          World
        </MenuItem>
        <MenuItem
          component={Link}
          to="/technology"
          selected={pathname === '/technology'}
        >
          Technology
        </MenuItem>
        <MenuItem
          component={Link}
          to="/health"
          selected={pathname === '/health'}
        >
          Health
        </MenuItem>
        <MenuItem
          component={Link}
          to="/sports"
          selected={pathname === '/sports'}
        >
          Sports
        </MenuItem>
        <MenuItem
          component={Link}
          to="/travel"
          selected={pathname === '/travel'}
        >
          Travel
        </MenuItem>
        <MenuItem
          component={Link}
          to="/science"
          selected={pathname === '/science'}
        >
          Science
        </MenuItem>
        <MenuItem component={Link} to="/food" selected={pathname === '/food'}>
          Food
        </MenuItem>
      </MenuList>
    </div>
  );

  return (
    <div className={classes.list}>
      <IconButton
        aria-label="Open menu"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

NewsMenu.propTypes = {
  changeTag: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(NewsMenu);
