import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const NewsMenuSideList = ({ onClick, toggleList, pathname }) => (
  <div
    role="presentation"
    onClick={toggleList(false)}
    onKeyDown={toggleList(false)}
  >
    <List>
      <ListItem
        component={Link}
        onClick={() => onClick('home')}
        to="/home"
        selected={pathname === '/'}
      >
        Home
      </ListItem>
      <ListItem
        component={Link}
        onClick={() => onClick('world')}
        to="/world"
        selected={pathname === '/world'}
      >
        World
      </ListItem>
      <ListItem
        component={Link}
        onClick={() => onClick('technology')}
        to="/technology"
        selected={pathname === '/technology'}
      >
        Technology
      </ListItem>
      <ListItem
        component={Link}
        onClick={() => onClick('health')}
        to="/health"
        selected={pathname === '/health'}
      >
        Health
      </ListItem>
      <ListItem
        component={Link}
        onClick={() => onClick('sports')}
        to="/sports"
        selected={pathname === '/sports'}
      >
        Sports
      </ListItem>
      <ListItem
        component={Link}
        onClick={() => onClick('travel')}
        to="/travel"
        selected={pathname === '/travel'}
      >
        Travel
      </ListItem>
      <ListItem
        component={Link}
        onClick={() => onClick('science')}
        to="/science"
        selected={pathname === '/science'}
      >
        Science
      </ListItem>
      <ListItem
        component={Link}
        onClick={() => onClick('food')}
        to="/food"
        selected={pathname === '/food'}
      >
        Food
      </ListItem>
    </List>
  </div>
);

NewsMenuSideList.propTypes = {
  pathname: PropTypes.string.isRequired,
  toggleList: PropTypes.func.isRequired,
};

export default NewsMenuSideList;
