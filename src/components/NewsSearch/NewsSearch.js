import React, { useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './NewsSearchStyles';

export default function NewsSearch() {
  const classes = useStyles();
  const [input, setInput] = useState({ input: '' });

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'Search' }}
      />
    </div>
  );
}
