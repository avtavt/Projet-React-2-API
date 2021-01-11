import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from './navigation/Navigation'

import Accueil from './screens/Accueil';
import TheMealDb from './screens/Foodish';
import TheCocktailDb from './screens/TheCocktailDb';
import Exemple from './screens/Exemple';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/TheMealDb">
            <TheMealDb />
          </Route>
          <Route path="/the-cocktail-db">
            <TheCocktailDb />
          </Route>
          <Route path="/exemple">
            <Exemple />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
