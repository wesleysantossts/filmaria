import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Filmes from './pages/Filmes/index';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favoritos" component={Favoritos} />
        <Route exact path="/filme/:id" component={Filmes} />

        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;