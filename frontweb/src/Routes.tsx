import { Router, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Auth from './pages/Auth';
import history from './util/history';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';



const Routes = () =>  (
        <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Auth/>
            </Route>           
            <Route path="/movies" exact>
                <Movie/>
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails/>
            </Route>
        </Switch>        
        </Router>
    );

export default Routes;

