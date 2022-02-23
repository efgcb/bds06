import { Router, Route, Switch } from 'react-router-dom';
import Assentment from './components/Assentment';
import AssentmentAval from './components/AssentmentAval';

import Navbar from "./components/Navbar";
import Auth from './pages/Auth';
import history from './util/history';



const Routes = () =>  (

        <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Auth/>
            </Route>           
            <Route path="/movies" exact>
                <Assentment/>
            </Route>
            <Route path="/movies/1">
                <AssentmentAval/>
            </Route>
        </Switch>        
        </Router>

    );


export default Routes;

