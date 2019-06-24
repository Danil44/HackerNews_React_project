import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const NewsMenuSideList = ({ toggleList, pathname }) => (
  <div
    role="presentation"
    onClick={toggleList(false)}
    onKeyDown={toggleList(false)}
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
      <MenuItem component={Link} to="/health" selected={pathname === '/health'}>
        Health
      </MenuItem>
      <MenuItem component={Link} to="/sports" selected={pathname === '/sports'}>
        Sports
      </MenuItem>
      <MenuItem component={Link} to="/travel" selected={pathname === '/travel'}>
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

NewsMenuSideList.propTypes = {
  pathname: PropTypes.string.isRequired,
  toggleList: PropTypes.func.isRequired,
};

export default NewsMenuSideList;
