import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';
import ItemList from './components/itemlist/ItemList';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact> 
            <ItemList />
          </Route>

        </Switch> 
      </>
    </Router>
  );
}

export default App;
