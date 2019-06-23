import React, { lazy, Suspense, Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NewsPage from './components/NewsPage/NewsPage';
import 'typeface-roboto';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <CssBaseline />
        <Switch>
          <Route path="/" component={NewsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
