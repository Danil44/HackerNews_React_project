import React, { lazy, Suspense, Component } from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NewsPage from './components/NewsPage/NewsPage';
import 'typeface-roboto';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <CssBaseline>
          <Route path="/" exact component={NewsPage} />
        </CssBaseline>
      </div>
    );
  }
}

export default App;
