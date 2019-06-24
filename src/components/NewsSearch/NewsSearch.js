import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import useStyles from './NewsSearchStyles';

function NewsSearch({ history, onSubmit }) {
  const classes = useStyles();
  const [form, setInput] = useState({ article: '' });

  const handleChange = name => evt => {
    setInput({ [name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(form.article);

    history.replace({
      pathname: '/search',
      search: `query=${form.article}`,
    });

    setInput({ article: '' });
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        name="article"
        onChange={handleChange('article')}
        value={form.article}
        margin="none"
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'Search' }}
      />
    </form>
  );
}

NewsSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(NewsSearch);
