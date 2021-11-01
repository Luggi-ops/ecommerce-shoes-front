import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';
import ItemList from './components/itemlist/ItemList';
import Hero from './components/hero/Hero';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact> 
            <Hero />
            <ItemList />
          </Route>

          <Route path="/product/:category/:name"> 
            <ItemDetailContainer />
          </Route>
        </Switch> 
      </>
    </Router>
  );
}

export default App;
