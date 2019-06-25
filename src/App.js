import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NewsPage from './components/NewsPage/NewsPage';
import 'typeface-roboto';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Switch>
          <Route path="/home" exact component={NewsPage} />
          <Route path="/world" exact component={NewsPage} />
          <Route path="/technology" exact component={NewsPage} />
          <Route path="/health" exact component={NewsPage} />
          <Route path="/sports" exact component={NewsPage} />
          <Route path="/travel" exact component={NewsPage} />
          <Route path="/science" exact component={NewsPage} />
          <Route path="/food" exact component={NewsPage} />
          <Route path="/search" exact component={NewsPage} />
          <Redirect to="/home" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
