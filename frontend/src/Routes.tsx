
import Navbar from "components/Navbar";
import Assentments from "pages/Movie";
import AssentmentsDetails from "pages/MovieDetails";
import Auth from "pages/Auth";
import { Router, Route, Switch } from "react-router-dom";
import history from "util/history";


const Routes = () =>  (

        <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Auth/>
            </Route>           
            <Route path="/movies" exact>
                <Assentments/>
            </Route>
            <Route path="/movies/1">
                <AssentmentsDetails/>
            </Route>
        </Switch>
        
        </Router>

    );


export default Routes;

