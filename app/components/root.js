import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CandyList from './CandyList';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag
          <Link to="/candies" className="navElement">
            Candies
          </Link>
          <Link to="/" className="navElement">
            Home
          </Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
        </main>
        <Switch>
          <Route exact path="/candies" component={CandyList} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
