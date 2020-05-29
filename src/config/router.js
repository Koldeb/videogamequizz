import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from '../screens/home';
import GetVideogames from '../components/GetVideoGames';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/quizz/:id' component={GetVideogames} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default Routes;
