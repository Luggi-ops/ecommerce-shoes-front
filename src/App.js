import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';
import ItemList from './components/itemlist/ItemList';
import Hero from './components/hero/Hero';
import ItemDetail from './components/itemdetail/ItemDetail';

function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <Switch>
          <Route path="/" exact> 
            <Hero />
            <ItemList />
          </Route>

          <Route path="/product/:category/:name"> 
            <ItemDetail/>
          </Route>

          <Route path="/product/:category"> 
            <ItemList />
          </Route>
        </Switch> 
      </>
    </Router>
  );
}

export default App;
