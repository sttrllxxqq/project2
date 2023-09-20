import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CreateQuizPage from './pages/CreateQuizPage';
import FavoritePage from './pages/FavoritePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/quiz/create" component={CreateQuizPage} />
          <Route path="/quiz/favorite" component={FavoritePage} />
          <Route path="/quiz/:id" component={QuizPage} />
          <Route path="/quiz" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
