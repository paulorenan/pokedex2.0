import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PokeInfo from './pages/PokeInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:id" component={PokeInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
