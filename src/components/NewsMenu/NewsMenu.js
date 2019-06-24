import React, { useState, useEffect, Fragment } from 'react';
import { SwipeableDrawer, IconButton } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import NewsMenuSideList from './NewsMenuSideList';

function NewsMenu({ changeTag, location }) {
  const [menu, setState] = useState({
    isOpen: false,
  });

  const toggleList = open => event => {
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
  }, [tag]);

  return (
    <Fragment>
      <IconButton
        aria-label="Open menu"
        color="inherit"
        onClick={toggleList(true)}
      >
        <MenuIcon />
      </IconButton>
      <div>
        <SwipeableDrawer
          open={menu.isOpen}
          onClose={toggleList(false)}
          onOpen={toggleList(true)}
        >
          <NewsMenuSideList toggleList={toggleList} pathname={pathname} />
        </SwipeableDrawer>
      </div>
    </Fragment>
  );
}

NewsMenu.propTypes = {
  changeTag: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(NewsMenu);
