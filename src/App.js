import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';
import ItemList from './components/itemlist/ItemList';
import Hero from './components/hero/Hero';
import ItemDetail from './components/itemdetail/ItemDetail';
import Cart from './components/cart/Cart';

//context
import {CartProvider} from './components/cartcontext/CartContext';

function App() {
  return (
    <CartProvider>
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

            <Route path="/cart"> 
              <Cart />
            </Route>
          </Switch> 
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
