import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import MainPage from '../../pages/MainPage';
import ArticlePage from '../../pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/article/:id">
              <ArticlePage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
