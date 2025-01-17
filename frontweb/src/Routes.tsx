import { Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import history from './util/history';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';
import PrivateRoute from 'components/PrivateRoute';
import Home from './pages/Home';


const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>      
      <PrivateRoute path="/movies">
      <Route path="/movies" exact>
        <Movie />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
