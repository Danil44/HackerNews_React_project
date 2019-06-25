import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const NewsMenuSideList = ({ onClick, toggleList, pathname }) => (
  <div
    role="presentation"
    onClick={toggleList(false)}
    onKeyDown={toggleList(false)}
  >
    <MenuList>
      <MenuItem
        button
        component={Link}
        onClick={() => onClick('home')}
        to="/home"
        selected={pathname === '/'}
      >
        Home
      </MenuItem>
      <MenuItem
        component={Link}
        onClick={() => onClick('world')}
        to="/world"
        selected={pathname === '/world'}
      >
        World
      </MenuItem>
      <MenuItem
        component={Link}
        onClick={() => onClick('technology')}
        to="/technology"
        selected={pathname === '/technology'}
      >
        Technology
      </MenuItem>
      <MenuItem
        component={Link}
        onClick={() => onClick('health')}
        to="/health"
        selected={pathname === '/health'}
      >
        Health
      </MenuItem>
      <MenuItem
        component={Link}
        onClick={() => onClick('sports')}
        to="/sports"
        selected={pathname === '/sports'}
      >
        Sports
      </MenuItem>
      <MenuItem
        component={Link}
        onClick={() => onClick('travel')}
        to="/travel"
        selected={pathname === '/travel'}
      >
        Travel
      </MenuItem>
      <MenuItem
        component={Link}
        onClick={() => onClick('science')}
        to="/science"
        selected={pathname === '/science'}
      >
        Science
      </MenuItem>
      <MenuItem
        component={Link}
        onClick={() => onClick('food')}
        to="/food"
        selected={pathname === '/food'}
      >
        Food
      </MenuItem>
    </MenuList>
  </div>
);

NewsMenuSideList.propTypes = {
  pathname: PropTypes.string.isRequired,
  toggleList: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NewsMenuSideList;
