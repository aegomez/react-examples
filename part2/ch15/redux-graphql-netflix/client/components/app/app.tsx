import React from 'react';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Movies from '../movies/movies';
import styles from './app.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Route exact path="/" component={Movies} />
        <Route path="/movies" component={Movies} />
      </div>
    );
  }
}

export default App;
// export default connect()(App);