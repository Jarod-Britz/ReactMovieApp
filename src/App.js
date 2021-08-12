import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route path='/' component={Movies} exact />
          <Route path='/trending' component={Trending} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
