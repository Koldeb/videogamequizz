import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from '../screens/Home/home';
import Quizz from '../screens/Quizz/quizz';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/quizz' component={Quizz} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default Routes;
