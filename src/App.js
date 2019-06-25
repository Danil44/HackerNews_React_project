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
          <Route path="/home" component={NewsPage} />
          <Route path="/world" component={NewsPage} />
          <Route path="/technology" component={NewsPage} />
          <Route path="/health" component={NewsPage} />
          <Route path="/sports" component={NewsPage} />
          <Route path="/travel" component={NewsPage} />
          <Route path="/science" component={NewsPage} />
          <Route path="/food" component={NewsPage} />
          <Route path="/search" component={NewsPage} />
          {/* <Route component={NotFound} /> */}
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
